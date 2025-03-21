const path = require('path');
const fs = require('fs');
const md5 = require('md5');
const Message = require('../message');
const { CommonUtils } = require('../../util/common');
const { getBodyFromV2SpecPayload } = require('../../v0/util');

// ref : https://dev.mailjet.com/email/guides/webhooks/
// import mapping json using JSON.parse to preserve object key order
const mapping = JSON.parse(fs.readFileSync(path.resolve(__dirname, './mapping.json'), 'utf-8'));

const processEvent = (event) => {
  const message = new Message(`MailJet`);
  // event type is always track
  const eventType = 'track';
  message.setEventType(eventType);
  message.setEventName(event.event);
  message.setPropertiesV2(event, mapping);

  if (event.time) {
    const ts = new Date(event.time * 1000).toISOString();
    message.setProperty('originalTimestamp', ts);
  }

  const externalId = [];
  // setting up mailjet contact_id and list_id to externalId
  if (event.mj_contact_id) {
    externalId.push({
      type: 'mailjetContactId',
      id: event.mj_contact_id,
    });
  }
  if (event.mj_list_id) {
    externalId.push({
      type: 'mailjetListId',
      id: event.mj_list_id,
    });
  }
  message.context.externalId = externalId;

  if (!message.userId && event.email) {
    // Treating userId as unique identifier
    // If userId is not present, then generating it from email using md5 hash function
    message.userId = md5(event.email);
  }
  return message;
};

// This fucntion just converts the incoming payload to array of already not and sends it to processEvent
const process = (payload) => {
  const events = getBodyFromV2SpecPayload(payload);
  const eventsArray = CommonUtils.toArray(events);
  return eventsArray.map(processEvent);
};

module.exports = { process };
