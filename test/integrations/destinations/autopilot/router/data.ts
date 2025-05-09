import { defaultApiKey } from '../../../common/secrets';

export const data = [
  {
    name: 'autopilot',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                ID: '1afjtc6chkhdeKsXYrNFOzR5D9v',
                Name: 'Autopilot',
                DestinationDefinition: {
                  ID: '1afjX4MlAucK57Q0ctTVlD27Tvo',
                  Name: 'AUTOPILOT',
                  DisplayName: 'Autopilot',
                  Config: { excludeKeys: [], includeKeys: [] },
                },
                Config: {
                  apiKey: defaultApiKey,
                  customMappings: [{ from: '0001', to: 'Signup' }],
                  triggerId: '00XX',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              metadata: { jobId: 1, userId: 'u1' },
              message: {
                anonymousId: 'ac7722c2-ccb6-4ae2-baf6-1effe861f4cd',
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.1-rc.2',
                  },
                  library: { name: 'RudderLabs JavaScript SDK', version: '1.1.1-rc.2' },
                  locale: 'en-GB',
                  os: { name: '', version: '' },
                  page: {
                    path: '/tests/html/index4.html',
                    referrer: '',
                    search: '',
                    title: '',
                    url: 'http://localhost/tests/html/index4.html',
                  },
                  screen: { density: 2 },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
                },
                integrations: { All: true },
                messageId: 'fad9b3fb-5778-4db3-9fb6-7168b554191f',
                originalTimestamp: '2020-04-17T14:42:44.722Z',
                receivedAt: '2020-04-17T20:12:44.758+05:30',
                request_ip: '[::1]:53513',
                sentAt: '2020-04-17T14:42:44.722Z',
                traits: { age: 23, email: 'testmp@rudderstack.com', firstname: 'Test Kafka' },
                timestamp: '2020-04-17T20:12:44.758+05:30',
                type: 'identify',
                userId: 'user12345',
              },
            },
            {
              destination: {
                ID: '1afjtc6chkhdeKsXYrNFOzR5D9v',
                Name: 'Autopilot',
                DestinationDefinition: {
                  ID: '1afjX4MlAucK57Q0ctTVlD27Tvo',
                  Name: 'AUTOPILOT',
                  DisplayName: 'Autopilot',
                  Config: { excludeKeys: [], includeKeys: [] },
                },
                Config: {
                  apiKey: defaultApiKey,
                  customMappings: [{ from: '0001', to: 'Signup' }],
                  triggerId: '00XX',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              metadata: { jobId: 2, userId: 'u1' },
              message: {
                anonymousId: 'ac7722c2-ccb6-4ae2-baf6-1effe861f4cd',
                channel: 'web',
                context: {
                  app: {
                    build: '1.0.0',
                    name: 'RudderLabs JavaScript SDK',
                    namespace: 'com.rudderlabs.javascript',
                    version: '1.1.1-rc.2',
                  },
                  library: { name: 'RudderLabs JavaScript SDK', version: '1.1.1-rc.2' },
                  locale: 'en-GB',
                  os: { name: '', version: '' },
                  page: {
                    path: '/tests/html/index4.html',
                    referrer: '',
                    search: '',
                    title: '',
                    url: 'http://localhost/tests/html/index4.html',
                  },
                  screen: { density: 2 },
                  traits: { age: 23, email: 'testmp@rudderstack.com', firstname: 'Test Kafka' },
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36',
                },
                event: 'test track with property',
                integrations: { All: true },
                messageId: '37b75e61-9bd2-4fb8-91ed-e3a064905f3a',
                originalTimestamp: '2020-04-17T14:42:44.724Z',
                properties: { test_prop_1: 'test prop', test_prop_2: 1232 },
                receivedAt: '2020-04-17T20:12:44.758+05:30',
                request_ip: '[::1]:53512',
                sentAt: '2020-04-17T14:42:44.725Z',
                timestamp: '2020-04-17T20:12:44.757+05:30',
                type: 'track',
                userId: 'user12345',
              },
            },
          ],
          destType: 'autopilot',
        },
        method: 'POST',
      },
    },
    output: {
      response: {
        status: 200,
        body: {
          output: [
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint: 'https://api2.autopilothq.com/v1/contact',
                headers: {
                  autopilotapikey: defaultApiKey,
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                params: {},
                body: {
                  JSON: {
                    contact: {
                      Email: 'testmp@rudderstack.com',
                      FirstName: 'Test Kafka',
                      custom: { age: 23 },
                    },
                  },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: 'ac7722c2-ccb6-4ae2-baf6-1effe861f4cd',
              },
              metadata: [{ jobId: 1, userId: 'u1' }],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1afjtc6chkhdeKsXYrNFOzR5D9v',
                Name: 'Autopilot',
                DestinationDefinition: {
                  ID: '1afjX4MlAucK57Q0ctTVlD27Tvo',
                  Name: 'AUTOPILOT',
                  DisplayName: 'Autopilot',
                  Config: { excludeKeys: [], includeKeys: [] },
                },
                Config: {
                  apiKey: defaultApiKey,
                  customMappings: [{ from: '0001', to: 'Signup' }],
                  triggerId: '00XX',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: {
                version: '1',
                type: 'REST',
                method: 'POST',
                endpoint:
                  'https://api2.autopilothq.com/v1/trigger/00XX/contact/testmp@rudderstack.com',
                headers: {
                  autopilotapikey: defaultApiKey,
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                },
                params: {},
                body: {
                  JSON: { property: { test_prop_1: 'test prop', test_prop_2: 1232 } },
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: 'ac7722c2-ccb6-4ae2-baf6-1effe861f4cd',
              },
              metadata: [{ jobId: 2, userId: 'u1' }],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1afjtc6chkhdeKsXYrNFOzR5D9v',
                Name: 'Autopilot',
                DestinationDefinition: {
                  ID: '1afjX4MlAucK57Q0ctTVlD27Tvo',
                  Name: 'AUTOPILOT',
                  DisplayName: 'Autopilot',
                  Config: { excludeKeys: [], includeKeys: [] },
                },
                Config: {
                  apiKey: defaultApiKey,
                  customMappings: [{ from: '0001', to: 'Signup' }],
                  triggerId: '00XX',
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
        },
      },
    },
  },
];
