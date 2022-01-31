/* eslint-disable no-param-reassign */
const get = require("get-value");
const unset = require("unset-value");

function getDynamicConfigValue(event, value) {
  // this rgegex checks for pattern  "only spaces {{ path || defaultvalue }}  only spaces" .
  //  " {{message.traits.key  ||   \"email\" }} "
  //  " {{ message.traits.key || 1233 }} "
  const defFormat = /^\s*\{\{\s*(?<path>[a-zA-Z_]([a-zA-Z0-9_]*\.[a-zA-Z_][a-zA-Z0-9_]*)+)+\s*\|\|\s*(?<defaultVal>.*)\s*\}\}\s*$/;
  const matResult = value.match(defFormat);
  if (matResult) {
    const pathVal = get(event, matResult.groups.path);
    if (pathVal) {
      value = pathVal;
      unset(event, matResult.groups.path);
    } else {
      value = matResult.groups.defaultVal.replace(/"/g, "").trim();
    }
    return value;
  }
  /** var format2 = /<some other regex>/;
  matResult = value.match(format2);
  if (matResult) {
    <more logic here>
    return value
  } */
  return value;
}

// eslint-disable-next-line consistent-return
function configureVal(value, event) {
  console.log("configureVal test Soni=>",value,event);
  if (value) {
    if (Array.isArray(value)) {
      value.forEach((key, index) => {
        value[index] = configureVal(key, event);
      });
    } else if (typeof value === "object") {
      Object.keys(value).forEach(obj => {
        value[obj] = configureVal(value[obj], event);
      });
    } else if (typeof value === "string") {
      value = getDynamicConfigValue(event, value);
    }
  }
  console.log("configureVal test1 Soni=>",value,event);
  return value;
}

function getDynamicConfig(event) {
  const { Config } = event.destination;
  event.destination.Config = configureVal(Config, event);
  console.log("getDynamicConfig test Config Soni=>",event.destination.Config);
  console.log("getDynamicConfig test event Soni=>",event);
  return event;
}

function processDynamicConfig(event, type) {
  console.log("processDynamicConfig test Soni=>",event,type);
  if (type === "router" || type === "batch") {
    const eventRetArr = [];
    event.forEach(e => {
      const newEvent = getDynamicConfig(e);
      eventRetArr.push(newEvent);
    });
    return eventRetArr;
  }
  console.log("processDynamicConfig test event Soni=>",event);
  return getDynamicConfig(event);
}

exports.processDynamicConfig = processDynamicConfig;
