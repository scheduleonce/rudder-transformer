const get = require("get-value");
const set = require("set-value");
const md5 = require("md5");
const { EventType } = require("../../constants");
const { destinationConfigKeys, endpoints, mapPayload } = require("./config");
const {
  defaultPostRequestConfig,
  defaultDeleteRequestConfig,
  defaultGetRequestConfig,
  mapKeys
} = require("../util");

function removeNullValues(payload) {
  let newPayload = {};
  var vals = Object.keys(payload);
  for (var i = 0; i < vals.length; i++) {
    let currentVal = vals[i];
    if (payload[currentVal] != (null || undefined)) {
      newPayload[currentVal] = payload[currentVal];
    }
  }
  return newPayload;
}

function responseBuilderSimple(payload, message, keysObj) {
  let newPayload = removeNullValues(payload);
  let endpoint;
  let requestConfig;

  switch (message.type) {
    case EventType.IDENTIFY:
      requestConfig = defaultPostRequestConfig;
      endpoint = endpoints.userUrl;
      break;
    case EventType.TRACK:
      requestConfig = defaultPostRequestConfig;
      endpoint = endpoints.eventsUrl;
      break;
    case EventType.PAGE:
      requestConfig = defaultGetRequestConfig;
      endpoint = endpoints.conversationsUrl;
      break;
    case EventType.GROUP:
      // Not Tested
      requestConfig = defaultPostRequestConfig;
      endpoint = endpoints.companyUrl;
      break;
    case EventType.RESET:
      // Not Tested
      const email = get(message.context.traits.email);
      const userId = get(message.context.traits.userId);
      const params = email ? `email=${email}` : `user_id=${userId}`;
      requestConfig = defaultDeleteRequestConfig;
      endpoint = `${endpoints.userUrl}?${params}`;
    default:
      break;
  }

  const response = {
    endpoint,
    header: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${keysObj.apiKey}`,
      Accept: "application/json"
    },
    requestConfig,
    userId: message.userId ? message.userId : message.anonymousId,
    payload: newPayload
  };
  return response;
}

function addContext(payload, message) {
  const deviceExists = get(message.context.device);
  const osExists = get(message.context.os);
  const appExists = get(message.context.app);

  const deviceKeys = deviceExists ? Object.keys(deviceExists) : [];
  const osKeys = osExists ? Object.keys(osExists) : [];
  const appKeys = appExists ? Object.keys(appExists) : [];

  let customPayload = {};

  deviceKeys.forEach(key => {
    if (key != "id") {
      let deviceKeysMapping = mapPayload.collectContext.device;
      let value = message.context.device[key];
      mapKeys(key, deviceKeysMapping, value, customPayload);
    }
  });
  osKeys.forEach(key => {
    let osKeysMapping = mapPayload.collectContext.os;
    let value = message.context.os[key];
    mapKeys(key, osKeysMapping, value, customPayload);
  });
  appKeys.forEach(key => {
    let appKeysMapping = mapPayload.collectContext.app;
    let value = message.context.app[key];
    mapKeys(key, appKeysMapping, value, customPayload);
  });
  payload.custom_attributes = customPayload;
  return payload;
}

function getGroupPayload(message, keysObj) {
  let rawPayload = {};
  let companyId = message.event;
  let companyFields = Object.keys(message.context.traits);
  companyFields.forEach(field => {
    let value = message.context.traits[field];
    mapKeys(field, mapPayload.group.main, value, rawPayload);
  });
  if (!companyFields.includes("id")) {
    set(rawPayload, company_id, md5(company.name));
  }
  rawPayload[company_id] = companyId;
  return rawPayload;
}

function getIdentifyPayload(message, keysObj) {
  let rawPayload = {};

  const traits = get(message.context.traits.traits)
    ? message.context.traits.traits
    : message.context.traits;

  // TODO
  // let chatWidget = get(message, "context.traits");

  if (get(message.context.Intercom)) {
    // const widget = get(message.context.Intercom.hideDefaultLauncher);
    const userHash = get(message.context.Intercom.user_hash);
    userHash
      ? set(rawPayload, "user_hash", userHash)
      : // : set(rawPayload, "hide_default_launcher", widget); To test
        null;
  }

  if (get(message.context.traits.context)) {
    const context = get(message.context.traits.context);
    const unsubscribe = get(context.Intercom.unsubscribedFromEmails);
    unsubscribe
      ? set(rawPayload, "unsubscribed_from_emails", unsubscribe)
      : null;
  }

  const traitsList = Object.keys(traits);
  traitsList.forEach(field => {
    let value = traits[field];
    if (field === "company") {
      let companies = [];
      let company = {};
      let companyFields = Object.keys(traits[field]);
      companyFields.forEach(companyTrait => {
        let value = traits[field][companyTrait];
        let replaceKeys = mapPayload.identify.sub;
        mapKeys(companyTrait, replaceKeys, value, company);
        company[companyTrait] = value;
      });
      if (!companyFields.includes("id")) {
        set(company, "company_id", md5(company.name));
      }
      companies.push(company);
      set(rawPayload, "companies", companies);
    } else {
      let replaceKeys = mapPayload.identify.main;
      mapKeys(field, replaceKeys, value, rawPayload);
    }
  });
  rawPayload.plan ? delete rawPayload.plan : null;
  keysObj.collectContext ? addContext(rawPayload) : null;
  return rawPayload;
}

function getTrackPayload(message, keysObj) {
  let rawPayload = {};
  let metadata = {};
  let price = {};
  let order_number = {};
  let properties = Object.keys(message.properties);

  properties.forEach(prop => {
    let value = message.properties[prop];
    if (prop === "price" || prop === "currency") {
      mapKeys(prop, mapPayload.track.price, value, price);
      price.amount *= 100;
    } else if (prop === "order_ID" || prop === "order_url") {
      mapKeys(prop, mapPayload.track.order, value, order_number);
    } else {
      metadata[prop] = value;
    }
  });

  metadata.price = price;
  metadata.order_number = order_number;

  rawPayload.metadata = metadata;
  rawPayload.event_name = message.event;
  rawPayload.user_id = message.userId;
  rawPayload.created_at = Math.floor(new Date().getTime() / 1000);
  return rawPayload;
}

function getTransformedJSON(message, keysObj) {
  let rawPayload;
  switch (message.type) {
    case EventType.PAGE:
      rawPayload = {};
      break;
    case EventType.TRACK:
      rawPayload = getTrackPayload(message, keysObj);
      break;
    case EventType.IDENTIFY:
      rawPayload = getIdentifyPayload(message, keysObj);
      break;
    case EventType.GROUP:
      rawPayload = getGroupPayload(message, keysObj);
      break;
    case EventType.RESET:
      rawPayload = {};
      break;
    default:
      break;
  }
  return { ...rawPayload };
}

function setDestinationKeys(destination) {
  let keysObj = {};
  const keys = Object.keys(destination.Config);
  keys.forEach(key => {
    switch (key) {
      case destinationConfigKeys.apiKey:
        keysObj.apiKey = `${destination.Config[key]}`;
        break;
      case destinationConfigKeys.appId:
        keysObj.appId = `${destination.Config[key]}`;
        break;
      case destinationConfigKeys.mobileApiKey:
        keysObj.mobileApiKey = `${destination.Config[key]}`;
        break;
      case destinationConfigKeys.collectContext:
        keysObj.collectContext = `${destination.Config[key]}`;
        break;
      default:
        break;
    }
  });
  return keysObj;
}

function processSingleMessage(message, destination) {
  const keysObj = setDestinationKeys(destination);
  const properties = getTransformedJSON(message, keysObj);
  return responseBuilderSimple(properties, message, keysObj);
}

function process(events) {
  let respList = [];
  events.forEach(event => {
    try {
      response = processSingleMessage(event.message, event.destination);
      respList.push(response);
    } catch (error) {
      respList.push({ statusCode: 400, error: error.message });
    }
  });
  return respList;
}

exports.process = process;
