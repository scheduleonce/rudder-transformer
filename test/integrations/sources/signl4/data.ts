import utils from '../../../../src/v0/util';

const defaultMockFns = () => {
  jest.spyOn(utils, 'generateUUID').mockReturnValue('97fcd7b2-cc24-47d7-b776-057b7b199513');
};

export const data = [
  {
    name: 'signl4',
    description: 'test-0',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 200,
                eventRaisedUtc: '2017-09-01T08:11:37.4815663Z',
                subscription: { id: '0acf8014-22f2-4503-88d7-f7d05b46744f' },
                alert: {
                  statusCode: 1,
                  eventId: '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                  externalEventId: 'INC091210',
                  id: '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                },
                id: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
                  originalTimestamp: '2017-09-01T08:11:37.000Z',
                  event: 'New Alert Created',
                  properties: {
                    eventType: 200,
                    'subscription.id': '0acf8014-22f2-4503-88d7-f7d05b46744f',
                    'alert.statusCode': 1,
                    'alert.eventId': '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                    'alert.externalEventId': 'INC091210',
                    'alert.id': '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-1',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 201,
                eventRaisedUtc: '2017-09-01T08:11:37.4815663Z',
                subscription: { id: '0acf8014-22f2-4503-88d7-f7d05b46744f' },
                user: {
                  username: 'Rene',
                  mailaddress: 'rene@signl4.com',
                  id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                },
                alert: {
                  statusCode: 2,
                  eventId: '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                  externalEventId: 'Content you passed in the X-S4-ExternalID parameter',
                  acknowledgedUserIds: ['f0bd5063-9588-51cf-b3d9-94e5647dedc5'],
                  id: '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                },
                id: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                    externalId: [
                      {
                        type: 'signl4UserId',
                        id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                      },
                    ],
                    traits: { email: 'rene@signl4.com', name: 'Rene' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
                  originalTimestamp: '2017-09-01T08:11:37.000Z',
                  event: 'Alert Confirmed',
                  properties: {
                    eventType: 201,
                    'subscription.id': '0acf8014-22f2-4503-88d7-f7d05b46744f',
                    'alert.statusCode': 2,
                    'alert.eventId': '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                    'alert.externalEventId': 'Content you passed in the X-S4-ExternalID parameter',
                    'alert.acknowledgedUserIds[0]': 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                    'alert.id': '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-2',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 201,
                eventRaisedUtc: '2017-09-01T08:11:37.4815663Z',
                subscription: { id: '0acf8014-22f2-4503-88d7-f7d05b46744f' },
                user: {
                  username: 'Rene',
                  mailaddress: 'rene@signl4.com',
                  id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                },
                alert: {
                  statusCode: 4,
                  eventId: '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                  externalEventId: 'Content you passed in the X-S4-ExternalID parameter',
                  acknowledgedUserIds: ['f0bd5063-9588-51cf-b3d9-94e5647dedc5'],
                  id: '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                },
                id: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                    externalId: [
                      {
                        type: 'signl4UserId',
                        id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                      },
                    ],
                    traits: { email: 'rene@signl4.com', name: 'Rene' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'dd209a2d-e037-41ee-b37d-f605cc0a39fb',
                  originalTimestamp: '2017-09-01T08:11:37.000Z',
                  event: 'Alert Resolved',
                  properties: {
                    eventType: 201,
                    'subscription.id': '0acf8014-22f2-4503-88d7-f7d05b46744f',
                    'alert.statusCode': 4,
                    'alert.eventId': '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                    'alert.externalEventId': 'Content you passed in the X-S4-ExternalID parameter',
                    'alert.acknowledgedUserIds[0]': 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                    'alert.id': '2518981069381242800_2ab1b5e0-f1b7-4c3e-9adf-6c157eeb4685',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-3',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 202,
                eventRaisedUtc: '2020-01-10T12:27:19Z',
                subscription: { id: 'b8fdd850-e2ad-45ff-924d-9c332a063200' },
                team: { id: '0e8979f7-0c6a-472d-8918-ecfd339252f8' },
                alert: {
                  statusCode: 1,
                  eventId: '2518236416806594587_0e67b746-6c88-4ddf-8872-99690b0457d9',
                  externalEventId: 'INC091210',
                  acknowledgedUserIds: [],
                  id: '2518236416804564453_12ea0f6f-948c-43d0-9034-f9565d7b6bd2',
                },
                id: '27283793-47c8-4da2-9767-d37be224338d',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: '27283793-47c8-4da2-9767-d37be224338d',
                  originalTimestamp: '2020-01-10T12:27:19.000Z',
                  event: 'Alert Escalated',
                  properties: {
                    eventType: 202,
                    'subscription.id': 'b8fdd850-e2ad-45ff-924d-9c332a063200',
                    'team.id': '0e8979f7-0c6a-472d-8918-ecfd339252f8',
                    'alert.statusCode': 1,
                    'alert.eventId': '2518236416806594587_0e67b746-6c88-4ddf-8872-99690b0457d9',
                    'alert.externalEventId': 'INC091210',
                    'alert.id': '2518236416804564453_12ea0f6f-948c-43d0-9034-f9565d7b6bd2',
                    'alert.acknowledgedUserIds': [],
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-4',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 203,
                eventRaisedUtc: '2018-04-17T15:00:32Z',
                subscription: { id: '1578ebd9-0a27-44ab-bc8e-52cd7d32e81d' },
                user: {
                  username: 'Rene',
                  mailaddress: 'rene@signl4.com',
                  id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                },
                alert: {
                  statusCode: 0,
                  eventId: '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                  externalEventId: 'Content you passed in the X-S4-ExternalID parameter',
                  id: '2518783235958846071_4e2dfab2-4717-42bc-8d37-8682402309c2',
                },
                annotation: {
                  message: "OK, I'll take care about it.",
                  id: '2518783235661483318_99ebffe0-1b90-40ef-990a-fbd842484761',
                },
                id: '141c0f88-7831-4d5e-b055-f6e83c269770',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                    externalId: [
                      {
                        type: 'signl4UserId',
                        id: 'f0bd5063-9588-51cf-b3d9-94e5647dedc5',
                      },
                    ],
                    traits: { email: 'rene@signl4.com', name: 'Rene' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: '141c0f88-7831-4d5e-b055-f6e83c269770',
                  originalTimestamp: '2018-04-17T15:00:32.000Z',
                  event: 'Alert Annotated',
                  properties: {
                    eventType: 203,
                    'subscription.id': '1578ebd9-0a27-44ab-bc8e-52cd7d32e81d',
                    'alert.statusCode': 0,
                    'alert.eventId': '2518783235949759942_fbc7b4a4-badd-47b8-9e1d-702fb6a1a0b2',
                    'alert.externalEventId': 'Content you passed in the X-S4-ExternalID parameter',
                    'alert.id': '2518783235958846071_4e2dfab2-4717-42bc-8d37-8682402309c2',
                    'annotation.message': "OK, I'll take care about it.",
                    'annotation.id': '2518783235661483318_99ebffe0-1b90-40ef-990a-fbd842484761',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-5',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 300,
                eventRaisedUtc: '2017-09-01T09:16:17.3717355Z',
                team: { id: 'f1801955-4724-44de-902a-f6f02ba9e10f' },
                id: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
                  originalTimestamp: '2017-09-01T09:16:17.000Z',
                  event: 'Duty Period Started',
                  properties: {
                    eventType: 300,
                    'team.id': 'f1801955-4724-44de-902a-f6f02ba9e10f',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-6',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 301,
                eventRaisedUtc: '2017-09-01T09:16:17.3717355Z',
                team: { id: 'f1801955-4724-44de-902a-f6f02ba9e10f' },
                id: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
                  originalTimestamp: '2017-09-01T09:16:17.000Z',
                  event: 'Duty Period Ended',
                  properties: {
                    eventType: 301,
                    'team.id': 'f1801955-4724-44de-902a-f6f02ba9e10f',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-7',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 302,
                eventRaisedUtc: '2017-09-01T09:16:17.3717355Z',
                team: { id: 'f1801955-4724-44de-902a-f6f02ba9e10f' },
                user: { id: 'e31da15f-7e13-43f1-b4a5-1ce3b470a504' },
                id: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                    externalId: [
                      {
                        type: 'signl4UserId',
                        id: 'e31da15f-7e13-43f1-b4a5-1ce3b470a504',
                      },
                    ],
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
                  originalTimestamp: '2017-09-01T09:16:17.000Z',
                  event: 'Somebody Punched-In',
                  properties: {
                    eventType: 302,
                    'team.id': 'f1801955-4724-44de-902a-f6f02ba9e10f',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'signl4',
    description: 'test-8',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                eventType: 303,
                eventRaisedUtc: '2017-09-01T09:16:17.3717355Z',
                team: { id: 'f1801955-4724-44de-902a-f6f02ba9e10f' },
                user: { id: 'e31da15f-7e13-43f1-b4a5-1ce3b470a504' },
                id: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
              }),
            },
            source: {},
          },
        ],
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            output: {
              batch: [
                {
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'Signl4' },
                    externalId: [
                      {
                        type: 'signl4UserId',
                        id: 'e31da15f-7e13-43f1-b4a5-1ce3b470a504',
                      },
                    ],
                  },
                  integrations: { Signl4: false },
                  type: 'track',
                  messageId: 'f56a6b59-1197-4e7d-8eca-8d21a4b57ec3',
                  originalTimestamp: '2017-09-01T09:16:17.000Z',
                  event: 'Somebody Punched-Out',
                  properties: {
                    eventType: 303,
                    'team.id': 'f1801955-4724-44de-902a-f6f02ba9e10f',
                  },
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                },
              ],
            },
          },
        ],
      },
    },
  },
].map((tc) => ({
  ...tc,
  mockFns: () => {
    defaultMockFns();
  },
}));
