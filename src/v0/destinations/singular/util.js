const lodash = require('lodash');
const { TransformationError, InstrumentationError } = require('@rudderstack/integrations-lib');
const {
  CONFIG_CATEGORIES,
  MAPPING_CONFIG,
  SINGULAR_SESSION_ANDROID_EXCLUSION,
  SINGULAR_SESSION_IOS_EXCLUSION,
  SINGULAR_EVENT_ANDROID_EXCLUSION,
  SINGULAR_EVENT_IOS_EXCLUSION,
  BASE_URL,
  SUPPORTED_PLATFORM,
  SUPPORTED_UNTIY_SUBPLATFORMS,
  SESSIONEVENTS,
} = require('./config');
const {
  constructPayload,
  defaultRequestConfig,
  defaultGetRequestConfig,
  removeUndefinedAndNullValues,
  extractCustomFields,
  getValueFromMessage,
  isDefinedAndNotNull,
  isAppleFamily,
} = require('../../util');

/*
  All the fields listed inside properties which are not directly mapped, will be sent to 'e' as custom event attributes
*/
const extractExtraFields = (message, EXCLUSION_FIELDS) => {
  const eventAttributes = {};
  extractCustomFields(message, eventAttributes, ['properties'], EXCLUSION_FIELDS);
  return eventAttributes;
};

/**
 * This function is used to generate the array of individual response for each of the products.
 * @param {*} products contains different products
 * @param {*} payload contains the common payload for each revenue event
 * @param {*} Config destination config
 * @param {*} eventAttributes custom attributes
 * @returns list of revenue event responses
 */
const generateRevenuePayloadArray = (products, payload, Config, eventAttributes) => {
  const responseArray = [];
  products.forEach((product) => {
    const productDetails = constructPayload(
      product,
      MAPPING_CONFIG[CONFIG_CATEGORIES.PRODUCT_PROPERTY.name],
    );
    let finalpayload = { ...payload, ...productDetails };
    // is_revenue_event will be true as here payload for a REVENUE event is being generated
    finalpayload.is_revenue_event = true;
    finalpayload = removeUndefinedAndNullValues(finalpayload);
    const response = defaultRequestConfig();
    response.endpoint = `${BASE_URL}/evt`;
    response.params = { ...finalpayload, a: Config.apiKey };
    if (eventAttributes) {
      response.params = { ...response.params, e: eventAttributes };
    }
    response.method = defaultGetRequestConfig.requestMethod;
    responseArray.push(response);
  });
  return responseArray;
};

const exclusionList = {
  ANDROID_SESSION_EXCLUSION_LIST: SINGULAR_SESSION_ANDROID_EXCLUSION,
  IOS_SESSION_EXCLUSION_LIST: SINGULAR_SESSION_IOS_EXCLUSION,
  ANDROID_EVENT_EXCLUSION_LIST: SINGULAR_EVENT_ANDROID_EXCLUSION,
  IOS_EVENT_EXCLUSION_LIST: SINGULAR_EVENT_IOS_EXCLUSION,
};

/**
 * Determines if the event is a session event or not
 * @param {*} Config
 * @param {*} eventName
 */
const isSessionEvent = (Config, eventName) => {
  const mappedSessionEvents = lodash.map(Config.sessionEventList, 'sessionEventName');
  return mappedSessionEvents.includes(eventName) || SESSIONEVENTS.includes(eventName.toLowerCase());
};

/**
 * Based on platform of device this function generates payload for singular API
 * @param {*} message
 * @param {*} sessionEvent
 * @returns
 */
const platformWisePayloadGenerator = (message, sessionEvent, Config) => {
  let eventAttributes;
  const clonedMessage = { ...message };
  let platform = getValueFromMessage(clonedMessage, 'context.os.name');
  const typeOfEvent = sessionEvent ? 'SESSION' : 'EVENT';
  if (!platform) {
    throw new InstrumentationError('Platform name is missing from context.os.name');
  }
  // checking if the os is one of ios, ipados, watchos, tvos
  if (typeof platform === 'string' && isAppleFamily(platform.toLowerCase())) {
    clonedMessage.context.os.name = 'iOS';
    platform = 'iOS';
  }
  platform = platform.toLowerCase();
  if (!SUPPORTED_PLATFORM[platform] && !SUPPORTED_UNTIY_SUBPLATFORMS[platform]) {
    throw new InstrumentationError(`Platform ${platform} is not supported`);
  }
  let payload;
  if (SUPPORTED_UNTIY_SUBPLATFORMS.includes(platform)) {
    payload = constructPayload(
      clonedMessage,
      MAPPING_CONFIG[CONFIG_CATEGORIES[`${typeOfEvent}_UNITY`].name],
    );
  } else {
    payload = constructPayload(
      clonedMessage,
      MAPPING_CONFIG[CONFIG_CATEGORIES[`${typeOfEvent}_${SUPPORTED_PLATFORM[platform]}`].name],
    );
  }

  if (!payload) {
    throw new TransformationError(`Failed to Create ${platform} ${typeOfEvent} Payload`);
  }
  if (!SUPPORTED_UNTIY_SUBPLATFORMS.includes(platform)) {
    if (sessionEvent) {
      // context.device.adTrackingEnabled = true implies Singular's do not track (dnt)
      // to be 0 and vice-versa.
      const adTrackingEnabled = getValueFromMessage(
        clonedMessage,
        'context.device.adTrackingEnabled',
      );
      if (adTrackingEnabled === true) {
        payload.dnt = 0;
      } else {
        payload.dnt = 1;
      }
      // by default, the value of openuri and install_source should be "", i.e empty string if nothing is passed
      payload.openuri = clonedMessage.properties.url || '';
      if (platform === 'android' || platform === 'Android') {
        payload.install_source = clonedMessage.properties.referring_application || '';
      }
    } else {
      // Custom Attribues is not supported by session events
      eventAttributes = extractExtraFields(
        clonedMessage,
        exclusionList[`${SUPPORTED_PLATFORM[platform]}_${typeOfEvent}_EXCLUSION_LIST`],
      );
      eventAttributes = removeUndefinedAndNullValues(eventAttributes);

      // If anyone out of value, revenue, total is set,we will have amt in payload
      // and we will consider the event as revenue event.
      if (!isDefinedAndNotNull(payload.is_revenue_event) && payload.amt) {
        payload.is_revenue_event = true;
      }
    }

    // Singular maps Connection Type to either wifi or carrier
    if (clonedMessage.context?.network?.wifi) {
      payload.c = 'wifi';
    } else {
      payload.c = 'carrier';
    }
  } else if (Config.match_id === 'advertisingId') {
    payload.match_id = clonedMessage?.context?.device?.advertisingId;
  } else if (message.properties.match_id) {
    payload.match_id = message.properties.match_id;
  }
  return { payload, eventAttributes };
};

module.exports = {
  generateRevenuePayloadArray,
  isSessionEvent,
  platformWisePayloadGenerator,
};
