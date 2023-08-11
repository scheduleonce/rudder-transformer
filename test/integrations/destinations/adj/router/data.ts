export const data = [
  {
    name: 'adj',
    description: 'Test 0',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                anonymousId: '21e13f4bc7ceddad',
                channel: 'mobile',
                context: {
                  app: {
                    build: '4',
                    name: 'RuddCDN',
                    namespace: 'com.example.testapp',
                    version: '1.0',
                  },
                  device: {
                    adTrackingEnabled: true,
                    advertisingId: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                    id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                    manufacturer: 'Google',
                    model: 'AOSP on IA Emulator',
                    name: 'generic_x86_arm',
                    type: 'Android',
                    attTrackingStatus: 3,
                  },
                  library: {
                    name: 'com.rudderstack.android.sdk.core',
                    version: '1.0.6',
                  },
                  locale: 'en-US',
                  network: {
                    bluetooth: false,
                    carrier: 'Android',
                    cellular: true,
                    wifi: true,
                  },
                  os: {
                    name: 'Android',
                    version: '9',
                  },
                  screen: {
                    density: 420,
                    height: 1794,
                    width: 1080,
                  },
                  timezone: 'Asia/Kolkata',
                  traits: {
                    anonymousId: '21e13f4bc7ceddad',
                  },
                  userAgent:
                    'Dalvik/2.1.0 (Linux; U; Android 9; AOSP on IA Emulator Build/PSR1.180720.117)',
                },
                event: 'First Investment',
                integrations: {
                  All: true,
                },
                messageId: '1601322811899-d9c7dd00-50dc-4364-95c8-e89423eb3cfb',
                originalTimestamp: '2020-09-28T19:53:31.900Z',
                properties: {
                  currency: 'EUR',
                  key1: 'value1',
                  key2: 'value2',
                  key3: {
                    k4: 'v4',
                    k5: {
                      k6: 'v6',
                    },
                  },
                  key5: [
                    {
                      k: 'v1',
                    },
                    {
                      k: 'v2',
                    },
                  ],
                  revenue: 20.37566,
                },
                receivedAt: '2020-09-29T14:50:43.005+05:30',
                request_ip: '[::1]',
                sentAt: '2020-09-28T19:53:44.998Z',
                timestamp: '2020-09-29T14:50:29.907+05:30',
                type: 'track',
              },
              metadata: {
                jobId: 2,
              },
              destination: {
                ID: '1i3Em7GMU9xVEiDlZUN8c88BMS9',
                Name: 'ADJ',
                DestinationDefinition: {
                  ID: '1i3DeZo6eSUKrS3KzDUqjbBPCDJ',
                  Name: 'ADJ',
                  DisplayName: 'Adjust',
                  Config: {
                    destConfig: {
                      android: ['useNativeSDK'],
                      defaultConfig: ['appToken', 'customMappings', 'delay', 'environment'],
                      ios: ['useNativeSDK'],
                      reactnative: ['useNativeSDK'],
                    },
                    excludeKeys: [],
                    includeKeys: ['appToken', 'customMappings', 'delay'],
                    supportedSourceTypes: ['android', 'ios', 'reactnative', 'cloud'],
                  },
                },
                Config: {
                  appToken: 't1yurrb968zk',
                  customMappings: [
                    {
                      from: 'Application Installed',
                      to: '3fdmll',
                    },
                    {
                      from: 'First Investment',
                      to: 'tf4gm5',
                    },
                  ],
                  environment: true,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'adj',
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
                endpoint: 'https://s2s.adjust.com/event',
                headers: {
                  Accept: '*/*',
                },
                params: {
                  callback_params:
                    '{"key1":"value1","key2":"value2","key3.k4":"v4","key3.k5.k6":"v6","key5[0].k":"v1","key5[1].k":"v2"}',
                  revenue: 20.38,
                  android_id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  gps_adid: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  att_status: 3,
                  tracking_enabled: true,
                  currency: 'EUR',
                  s2s: 1,
                  ip_address: '[::1]',
                  app_token: 't1yurrb968zk',
                  event_token: 'tf4gm5',
                  environment: 'production',
                },
                body: {
                  JSON: {},
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: '21e13f4bc7ceddad',
              },
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1i3Em7GMU9xVEiDlZUN8c88BMS9',
                Name: 'ADJ',
                DestinationDefinition: {
                  ID: '1i3DeZo6eSUKrS3KzDUqjbBPCDJ',
                  Name: 'ADJ',
                  DisplayName: 'Adjust',
                  Config: {
                    destConfig: {
                      android: ['useNativeSDK'],
                      defaultConfig: ['appToken', 'customMappings', 'delay', 'environment'],
                      ios: ['useNativeSDK'],
                      reactnative: ['useNativeSDK'],
                    },
                    excludeKeys: [],
                    includeKeys: ['appToken', 'customMappings', 'delay'],
                    supportedSourceTypes: ['android', 'ios', 'reactnative', 'cloud'],
                  },
                },
                Config: {
                  appToken: 't1yurrb968zk',
                  customMappings: [
                    {
                      from: 'Application Installed',
                      to: '3fdmll',
                    },
                    {
                      from: 'First Investment',
                      to: 'tf4gm5',
                    },
                  ],
                  environment: true,
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
  {
    name: 'adj',
    description: 'Test 1',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                anonymousId: '21e13f4bc7ceddad',
                channel: 'mobile',
                context: {
                  app: {
                    build: '4',
                    name: 'RuddCDN',
                    namespace: 'com.example.testapp',
                    version: '1.0',
                  },
                  device: {
                    adTrackingEnabled: true,
                    advertisingId: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                    id: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                    manufacturer: 'Google',
                    model: 'AOSP on IA Emulator',
                    name: 'generic_x86_arm',
                    type: 'ios',
                    attTrackingStatus: 3,
                  },
                  library: {
                    name: 'com.rudderstack.android.sdk.core',
                    version: '1.0.6',
                  },
                  locale: 'en-US',
                  network: {
                    bluetooth: false,
                    carrier: 'Android',
                    cellular: true,
                    wifi: true,
                  },
                  os: {
                    name: 'Android',
                    version: '9',
                  },
                  screen: {
                    density: 420,
                    height: 1794,
                    width: 1080,
                  },
                  timezone: 'Asia/Kolkata',
                  traits: {
                    anonymousId: '21e13f4bc7ceddad',
                  },
                  userAgent:
                    'Dalvik/2.1.0 (Linux; U; Android 9; AOSP on IA Emulator Build/PSR1.180720.117)',
                },
                event: 'First Investment',
                integrations: {
                  All: true,
                },
                messageId: '1601322811899-d9c7dd00-50dc-4364-95c8-e89423eb3cfb',
                originalTimestamp: '2020-09-28T19:53:31.900Z',
                properties: {
                  currency: 'EUR',
                  key1: 'value1',
                  key2: 'value2',
                  key3: {
                    k4: 'v4',
                    k5: {
                      k6: 'v6',
                    },
                  },
                  key5: [
                    {
                      k: 'v1',
                    },
                    {
                      k: 'v2',
                    },
                  ],
                  revenue: 20.37566,
                },
                receivedAt: '2020-09-29T14:50:43.005+05:30',
                request_ip: '[::1]',
                sentAt: '2020-09-28T19:53:44.998Z',
                timestamp: '2020-09-29T14:50:29.907+05:30',
                type: 'track',
              },
              metadata: {
                jobId: 2,
              },
              destination: {
                ID: '1i3Em7GMU9xVEiDlZUN8c88BMS9',
                Name: 'ADJ',
                DestinationDefinition: {
                  ID: '1i3DeZo6eSUKrS3KzDUqjbBPCDJ',
                  Name: 'ADJ',
                  DisplayName: 'Adjust',
                  Config: {
                    destConfig: {
                      android: ['useNativeSDK'],
                      defaultConfig: ['appToken', 'customMappings', 'delay', 'environment'],
                      ios: ['useNativeSDK'],
                      reactnative: ['useNativeSDK'],
                    },
                    excludeKeys: [],
                    includeKeys: ['appToken', 'customMappings', 'delay'],
                    supportedSourceTypes: ['android', 'ios', 'reactnative', 'cloud'],
                  },
                },
                Config: {
                  appToken: 't1yurrb968zk',
                  customMappings: [
                    {
                      from: 'Application Installed',
                      to: '3fdmll',
                    },
                    {
                      from: 'First Investment',
                      to: 'tf4gm5',
                    },
                  ],
                  environment: true,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
          ],
          destType: 'adj',
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
                endpoint: 'https://s2s.adjust.com/event',
                headers: {
                  Accept: '*/*',
                },
                params: {
                  callback_params:
                    '{"key1":"value1","key2":"value2","key3.k4":"v4","key3.k5.k6":"v6","key5[0].k":"v1","key5[1].k":"v2"}',
                  revenue: 20.38,
                  idfv: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  idfa: '3f034872-5e28-45a1-9eda-ce22a3e36d1a',
                  att_status: 3,
                  tracking_enabled: true,
                  currency: 'EUR',
                  s2s: 1,
                  ip_address: '[::1]',
                  app_token: 't1yurrb968zk',
                  event_token: 'tf4gm5',
                  environment: 'production',
                },
                body: {
                  JSON: {},
                  XML: {},
                  JSON_ARRAY: {},
                  FORM: {},
                },
                files: {},
                userId: '21e13f4bc7ceddad',
              },
              metadata: [
                {
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1i3Em7GMU9xVEiDlZUN8c88BMS9',
                Name: 'ADJ',
                DestinationDefinition: {
                  ID: '1i3DeZo6eSUKrS3KzDUqjbBPCDJ',
                  Name: 'ADJ',
                  DisplayName: 'Adjust',
                  Config: {
                    destConfig: {
                      android: ['useNativeSDK'],
                      defaultConfig: ['appToken', 'customMappings', 'delay', 'environment'],
                      ios: ['useNativeSDK'],
                      reactnative: ['useNativeSDK'],
                    },
                    excludeKeys: [],
                    includeKeys: ['appToken', 'customMappings', 'delay'],
                    supportedSourceTypes: ['android', 'ios', 'reactnative', 'cloud'],
                  },
                },
                Config: {
                  appToken: 't1yurrb968zk',
                  customMappings: [
                    {
                      from: 'Application Installed',
                      to: '3fdmll',
                    },
                    {
                      from: 'First Investment',
                      to: 'tf4gm5',
                    },
                  ],
                  environment: true,
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