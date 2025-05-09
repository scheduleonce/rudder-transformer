const path = require('path');
const fs = require('fs');
const sha256 = require('sha256');
const { TransformationError } = require('@rudderstack/integrations-lib');
const {
  flattenJson,
  removeUndefinedAndNullAndEmptyValues,
  getBodyFromV2SpecPayload,
} = require('../../v0/util');
const Message = require('../message');

// import mapping json using JSON.parse to preserve object key order
const mapping = JSON.parse(fs.readFileSync(path.resolve(__dirname, './mapping.json'), 'utf-8'));

function settingProperties(event, message) {
  const cloneMessage = { ...message };
  const flatEvent = event;

  // deleting object fields(already mapped) before flattening the event
  delete flatEvent?.recipientData;
  delete flatEvent?.recordedAt;
  delete flatEvent?.triggerData?.formSubmissionData?.recordedAt;
  delete flatEvent?.triggerData?.formSubmissionData?.recipientData;

  // flattening the event and assigning it to properties
  cloneMessage.properties = removeUndefinedAndNullAndEmptyValues(flattenJson(flatEvent));

  // fields that are already mapped
  const excludeFields = [
    'triggerData.email',
    'triggerData.userId',
    'recipientData.email',
    'recipientEmail',
    'triggerData.formSubmissionData.email',
    'triggerData.formSubmissionData.recipientEmail',
  ];

  // deleting already mapped fields
  excludeFields.forEach((excludeField) => {
    delete cloneMessage?.properties[excludeField];
  });

  return cloneMessage;
}

function process(payload) {
  const event = getBodyFromV2SpecPayload(payload);
  const message = new Message(`Mailmodo`);

  // event type is always track
  const eventType = 'track';

  message.setEventType(eventType);

  message.setPropertiesV2(event, mapping);

  message.context.integration.version = '1.0.0';

  // setting event Name
  if (event?.triggerData?.triggerSource) {
    message.setEventName(event.triggerData.triggerSource);
  } else {
    message.setEventName('Form Submitted');
  }
  // setting up mailmodo userId to externalId
  if (event?.triggerData?.userId) {
    message.context.externalId = [
      {
        type: 'mailmodoUserId',
        id: event.triggerData.userId,
      },
    ];
  }

  const email =
    event?.triggerData?.email || event?.recipientData?.email || event?.recipientEmail || null;
  // throws an error if email is not present
  if (!email) {
    throw new TransformationError('Missing essential fields from Mailmodo');
  }

  // generating anonymousId using email
  message.anonymousId = sha256(email);

  // setting originalTimestamp
  if (event?.recordedAt?.ts) {
    message.originalTimestamp = new Date(event.recordedAt.ts * 1000).toISOString();
  } else if (event?.triggerData?.formSubmissionData?.recordedAt?.ts) {
    message.originalTimestamp = new Date(
      event.triggerData.formSubmissionData.recordedAt.ts * 1000,
    ).toISOString();
  }

  const finalMessage = settingProperties(event, message);

  return finalMessage;
}

module.exports = { process };
