/* eslint-disable no-param-reassign */

const get = require('get-value');
const { cloneDeep, isNumber } = require('lodash');
const {
  InstrumentationError,
  ConfigurationError,
  isDefinedAndNotNull,
} = require('@rudderstack/integrations-lib');
const isString = require('lodash/isString');
const {
  constructPayload,
  defaultRequestConfig,
  getValueFromMessage,
  removeHyphens,
  simpleProcessRouterDest,
  getAccessToken,
  isDefined,
} = require('../../util');

const { trackMapping, BASE_ENDPOINT } = require('./config');
const { JSON_MIME_TYPE } = require('../../util/constant');

/**
 * This function is helping to update the mappingJson.
 * It is removing the metadata field with type "hashToSha256"
 * @param {} mapping -> it is the configMapping.json
 * @returns
 */
const updateMappingJson = (mapping) => {
  const newMapping = [];
  mapping.forEach((element) => {
    if (get(element, 'metadata.type') && element.metadata.type.includes('hashToSha256')) {
      element.metadata.type = 'toString';
    }
    newMapping.push(element);
  });
  return newMapping;
};

const responseBuilder = async (metadata, message, { Config }, payload) => {
  const response = defaultRequestConfig();
  const { event } = message;
  const { subAccount } = Config;
  let { customerId, loginCustomerId } = Config;
  const { configData } = Config;

  if (isDefinedAndNotNull(configData)) {
    const configDetails = JSON.parse(configData);
    customerId = configDetails.customerId;
    if (isDefined(configDetails.loginCustomerId)) {
      loginCustomerId = configDetails.loginCustomerId;
    }
  }

  if (isNumber(customerId)) {
    customerId = customerId.toString();
  }
  if (isNumber(loginCustomerId)) {
    loginCustomerId = loginCustomerId.toString();
  }
  if (!isString(customerId) || !isString(loginCustomerId)) {
    throw new InstrumentationError('customerId and loginCustomerId should be a string or number');
  }
  const filteredCustomerId = removeHyphens(customerId);
  response.endpoint = `${BASE_ENDPOINT}/${filteredCustomerId}:uploadConversionAdjustments`;
  response.body.JSON = payload;
  const accessToken = getAccessToken(metadata, 'access_token');
  response.headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': JSON_MIME_TYPE,
    'developer-token': getValueFromMessage(metadata, 'secret.developer_token'),
  };
  response.params = { event, customerId: filteredCustomerId };
  if (subAccount)
    if (loginCustomerId) {
      const filteredLoginCustomerId = removeHyphens(loginCustomerId);
      response.headers['login-customer-id'] = filteredLoginCustomerId;
    } else throw new ConfigurationError(`LoginCustomerId is required as subAccount is true.`);

  if (loginCustomerId) {
    const filteredLoginCustomerId = removeHyphens(loginCustomerId);
    response.headers['login-customer-id'] = filteredLoginCustomerId;
  }

  return response;
};

const processTrackEvent = async (metadata, message, destination) => {
  let flag = 0;
  const { Config } = destination;
  const { event } = message;
  const { listOfConversions } = Config;
  if (listOfConversions && listOfConversions.length > 0) {
    if (typeof listOfConversions[0] === 'string') {
      if (listOfConversions.includes(event)) {
        flag = 1;
      }
    } else if (listOfConversions.some((i) => i.conversions === event)) {
      flag = 1;
    }
  }
  if (event === undefined || event === '' || flag === 0) {
    throw new ConfigurationError(
      `Conversion named "${event}" was not specified in the RudderStack destination configuration`,
    );
  }
  const { requireHash } = Config;
  let updatedMapping = cloneDeep(trackMapping);

  if (requireHash === false) {
    updatedMapping = updateMappingJson(updatedMapping);
  }

  const payload = constructPayload(message, updatedMapping);

  payload.partialFailure = true;
  if (!payload.conversionAdjustments[0]?.userIdentifiers) {
    throw new InstrumentationError(
      `Any of email, phone, firstName, lastName, city, street, countryCode, postalCode or streetAddress is required in traits.`,
    );
  }
  payload.conversionAdjustments[0].adjustmentType = 'ENHANCEMENT';
  // Removing the null values from userIdentifier
  const arr = payload.conversionAdjustments[0].userIdentifiers;
  payload.conversionAdjustments[0].userIdentifiers = arr.filter((item) => !!item);
  return responseBuilder(metadata, message, destination, payload);
};

const processEvent = async (metadata, message, destination) => {
  const { type } = message;
  if (!type) {
    throw new InstrumentationError('Invalid payload. Message Type is not present');
  }
  if (type.toLowerCase() !== 'track') {
    throw new InstrumentationError(`Message Type ${type} is not supported. Aborting message.`);
  } else {
    return processTrackEvent(metadata, message, destination);
  }
};

const process = async (event) => processEvent(event.metadata, event.message, event.destination);

const processRouterDest = async (inputs, reqMetadata) => {
  const respList = await simpleProcessRouterDest(inputs, process, reqMetadata);
  return respList;
};

module.exports = { process, processRouterDest };
