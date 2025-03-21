const path = require('path');
const fs = require('fs');
const Message = require('../message');
const { removeUndefinedAndNullValues, getBodyFromV2SpecPayload } = require('../../v0/util');

// import mapping json using JSON.parse to preserve object key order
const identifyMapping = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './identifyMapping.json'), 'utf-8'),
);

const trackMapping = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './trackMapping.json'), 'utf-8'),
);

const groupMapping = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './groupMapping.json'), 'utf-8'),
);

const prepareIdentifyaPayload = (event) => {
  const message = new Message('Refiner');
  message.setEventType('identify');
  message.setPropertiesV2(event, identifyMapping);
  message.context.traits = removeUndefinedAndNullValues(message.context.traits);
  return message;
};

const prepareTrackPayload = (event) => {
  const message = new Message('Refiner');
  message.setEventType('track');
  message.setPropertiesV2(event, trackMapping);
  message.properties.response = removeUndefinedAndNullValues(message.properties.response);
  return message;
};

const prepareGroupPayload = (event) => {
  const message = new Message('Refiner');
  message.setEventType('group');
  message.setPropertiesV2(event, groupMapping);
  message.traits = removeUndefinedAndNullValues(message.traits);
  return message;
};

function process(payload) {
  const event = getBodyFromV2SpecPayload(payload);
  const resultPayload = [];
  const identifyPayload = prepareIdentifyaPayload(event);
  const trackPayload = prepareTrackPayload(event);
  const groupPayload = prepareGroupPayload(event);

  resultPayload.push(identifyPayload, trackPayload);

  if (groupPayload.groupId) {
    resultPayload.push(groupPayload);
  }
  return resultPayload;
}

module.exports = { process };
