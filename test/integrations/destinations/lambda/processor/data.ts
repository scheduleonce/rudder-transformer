export const data = [
  {
    name: 'lambda',
    description: 'Simple Identify call',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2022-08-03T10:44:55.382+05:30',
              userId: 'user113',
              context: {
                os: { name: 'android' },
                device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                traits: { name: 'User2', email: 'user112@mail.com' },
              },
              rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
              messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
              timestamp: '2022-08-03T10:44:54.942+05:30',
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              request_ip: '[::1]',
              originalTimestamp: '2022-08-03T10:44:55.382+05:30',
            },
            metadata: {
              userId: 'user113<<>>user113',
              jobId: 10,
              sourceId: '2CFEootdF2eQh0CGeD0jdVybP5A',
              destinationId: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              attemptNum: 0,
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              createdAt: '2022-08-03T05:14:55.384Z',
              firstAttemptedAt: '',
              transformAt: 'router',
              workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              secret: null,
              jobsT: {
                UUID: '53927e88-2d5c-4274-ad72-2e1c14a96301',
                JobID: 10,
                UserID: 'user113<<>>user113',
                CreatedAt: '2022-08-03T05:14:55.384207Z',
                ExpireAt: '2022-08-03T05:14:55.384207Z',
                CustomVal: 'LAMBDA',
                EventCount: 1,
                EventPayload: {
                  type: 'identify',
                  sentAt: '2022-08-03T10:44:55.382+05:30',
                  userId: 'user113',
                  context: {
                    os: { name: 'android' },
                    device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                    traits: { name: 'User2', email: 'user112@mail.com' },
                  },
                  rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
                  messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  timestamp: '2022-08-03T10:44:54.942+05:30',
                  receivedAt: '2022-08-03T10:44:54.943+05:30',
                  request_ip: '[::1]',
                  originalTimestamp: '2022-08-03T10:44:55.382+05:30',
                },
                PayloadSize: 550,
                LastJobStatus: {
                  JobID: 0,
                  JobState: '',
                  AttemptNum: 0,
                  ExecTime: '0001-01-01T00:00:00Z',
                  RetryTime: '0001-01-01T00:00:00Z',
                  ErrorCode: '',
                  ErrorResponse: null,
                  Parameters: null,
                  WorkspaceId: '',
                },
                Parameters: {
                  record_id: null,
                  source_id: '2CFEootdF2eQh0CGeD0jdVybP5A',
                  event_name: '',
                  event_type: 'identify',
                  message_id: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  received_at: '2022-08-03T10:44:54.943+05:30',
                  workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
                  transform_at: 'router',
                  source_job_id: '',
                  destination_id: '2CojwY2YqpiTqfBPrMAUN8orgHA',
                  gateway_job_id: 10,
                  source_task_id: '',
                  source_batch_id: '',
                  source_category: '',
                  source_job_run_id: '',
                  source_task_run_id: '',
                  source_definition_id: '2CCxgViQJACgWABA6h83wlXnE1k',
                  destination_definition_id: '',
                },
                WorkspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              },
              pickedAtTime: '2022-08-03T10:44:56.193361+05:30',
              resultSetID: 10,
            },
            destination: {
              ID: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              Name: 'Lambda test',
              DestinationDefinition: {
                ID: '2CoiaHPaRb79wpSG3wZWfrG3B0n',
                Name: 'LAMBDA',
                DisplayName: 'AWS Lambda',
                Config: {
                  destConfig: {
                    defaultConfig: [
                      'region',
                      'accessKeyId',
                      'accessKey',
                      'lambda',
                      'invocationType',
                      'enableBatchInput',
                      'clientContext',
                    ],
                  },
                  excludeKeys: [],
                  includeKeys: [],
                  saveDestinationResponse: true,
                  secretKeys: ['accessKeyId', 'accessKey'],
                  supportedMessageTypes: ['identify', 'page', 'screen', 'track', 'alias', 'group'],
                  supportedSourceTypes: [
                    'amp',
                    'android',
                    'cordova',
                    'cloud',
                    'flutter',
                    'ios',
                    'reactnative',
                    'unity',
                    'warehouse',
                    'web',
                  ],
                  transformAt: 'router',
                  transformAtV1: 'router',
                },
                ResponseRules: {},
              },
              Config: {
                accessKeyId: '',
                clientContext: '',
                enableBatchInput: false,
                invocationType: 'Event',
                lambda: 'testFunction',
                region: 'us-west-2',
                accessKey: '',
              },
              Enabled: true,
              Transformations: [],
              IsProcessorEnabled: true,
              RevisionID: '2CojwWiWjNghiGbfuRcwfs6Bt5q',
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            metadata: {
              userId: 'user113<<>>user113',
              jobId: 10,
              sourceId: '2CFEootdF2eQh0CGeD0jdVybP5A',
              destinationId: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              attemptNum: 0,
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              createdAt: '2022-08-03T05:14:55.384Z',
              firstAttemptedAt: '',
              transformAt: 'router',
              workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              secret: null,
              jobsT: {
                UUID: '53927e88-2d5c-4274-ad72-2e1c14a96301',
                JobID: 10,
                UserID: 'user113<<>>user113',
                CreatedAt: '2022-08-03T05:14:55.384207Z',
                ExpireAt: '2022-08-03T05:14:55.384207Z',
                CustomVal: 'LAMBDA',
                EventCount: 1,
                EventPayload: {
                  type: 'identify',
                  sentAt: '2022-08-03T10:44:55.382+05:30',
                  userId: 'user113',
                  context: {
                    os: { name: 'android' },
                    device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                    traits: { name: 'User2', email: 'user112@mail.com' },
                  },
                  rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
                  messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  timestamp: '2022-08-03T10:44:54.942+05:30',
                  receivedAt: '2022-08-03T10:44:54.943+05:30',
                  request_ip: '[::1]',
                  originalTimestamp: '2022-08-03T10:44:55.382+05:30',
                },
                PayloadSize: 550,
                LastJobStatus: {
                  JobID: 0,
                  JobState: '',
                  AttemptNum: 0,
                  ExecTime: '0001-01-01T00:00:00Z',
                  RetryTime: '0001-01-01T00:00:00Z',
                  ErrorCode: '',
                  ErrorResponse: null,
                  Parameters: null,
                  WorkspaceId: '',
                },
                Parameters: {
                  record_id: null,
                  source_id: '2CFEootdF2eQh0CGeD0jdVybP5A',
                  event_name: '',
                  event_type: 'identify',
                  message_id: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  received_at: '2022-08-03T10:44:54.943+05:30',
                  workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
                  transform_at: 'router',
                  source_job_id: '',
                  destination_id: '2CojwY2YqpiTqfBPrMAUN8orgHA',
                  gateway_job_id: 10,
                  source_task_id: '',
                  source_batch_id: '',
                  source_category: '',
                  source_job_run_id: '',
                  source_task_run_id: '',
                  source_definition_id: '2CCxgViQJACgWABA6h83wlXnE1k',
                  destination_definition_id: '',
                },
                WorkspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              },
              pickedAtTime: '2022-08-03T10:44:56.193361+05:30',
              resultSetID: 10,
            },
            output: {
              payload: JSON.stringify({
                type: 'identify',
                sentAt: '2022-08-03T10:44:55.382+05:30',
                userId: 'user113',
                context: {
                  os: { name: 'android' },
                  device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                  traits: { name: 'User2', email: 'user112@mail.com' },
                },
                rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
                messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                timestamp: '2022-08-03T10:44:54.942+05:30',
                receivedAt: '2022-08-03T10:44:54.943+05:30',
                request_ip: '[::1]',
                originalTimestamp: '2022-08-03T10:44:55.382+05:30',
              }),
              destConfig: { clientContext: '', invocationType: 'Event', lambda: 'testFunction' },
              userId: '',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'lambda',
    description: 'Destination config not present',
    feature: 'processor',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: [
          {
            message: {
              type: 'identify',
              sentAt: '2022-08-03T10:44:55.382+05:30',
              userId: 'user113',
              context: {
                os: { name: 'android' },
                device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                traits: { name: 'User2', email: 'user112@mail.com' },
              },
              rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
              messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
              timestamp: '2022-08-03T10:44:54.942+05:30',
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              request_ip: '[::1]',
              originalTimestamp: '2022-08-03T10:44:55.382+05:30',
            },
            metadata: {
              userId: 'user113<<>>user113',
              jobId: 10,
              sourceId: '2CFEootdF2eQh0CGeD0jdVybP5A',
              destinationId: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              attemptNum: 0,
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              createdAt: '2022-08-03T05:14:55.384Z',
              firstAttemptedAt: '',
              transformAt: 'router',
              workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              secret: null,
              jobsT: {
                UUID: '53927e88-2d5c-4274-ad72-2e1c14a96301',
                JobID: 10,
                UserID: 'user113<<>>user113',
                CreatedAt: '2022-08-03T05:14:55.384207Z',
                ExpireAt: '2022-08-03T05:14:55.384207Z',
                CustomVal: 'LAMBDA',
                EventCount: 1,
                EventPayload: {
                  type: 'identify',
                  sentAt: '2022-08-03T10:44:55.382+05:30',
                  userId: 'user113',
                  context: {
                    os: { name: 'android' },
                    device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                    traits: { name: 'User2', email: 'user112@mail.com' },
                  },
                  rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
                  messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  timestamp: '2022-08-03T10:44:54.942+05:30',
                  receivedAt: '2022-08-03T10:44:54.943+05:30',
                  request_ip: '[::1]',
                  originalTimestamp: '2022-08-03T10:44:55.382+05:30',
                },
                PayloadSize: 550,
                LastJobStatus: {
                  JobID: 0,
                  JobState: '',
                  AttemptNum: 0,
                  ExecTime: '0001-01-01T00:00:00Z',
                  RetryTime: '0001-01-01T00:00:00Z',
                  ErrorCode: '',
                  ErrorResponse: null,
                  Parameters: null,
                  WorkspaceId: '',
                },
                Parameters: {
                  record_id: null,
                  source_id: '2CFEootdF2eQh0CGeD0jdVybP5A',
                  event_name: '',
                  event_type: 'identify',
                  message_id: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  received_at: '2022-08-03T10:44:54.943+05:30',
                  workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
                  transform_at: 'router',
                  source_job_id: '',
                  destination_id: '2CojwY2YqpiTqfBPrMAUN8orgHA',
                  gateway_job_id: 10,
                  source_task_id: '',
                  source_batch_id: '',
                  source_category: '',
                  source_job_run_id: '',
                  source_task_run_id: '',
                  source_definition_id: '2CCxgViQJACgWABA6h83wlXnE1k',
                  destination_definition_id: '',
                },
                WorkspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              },
              pickedAtTime: '2022-08-03T10:44:56.193361+05:30',
              resultSetID: 10,
            },
            destination: {
              ID: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              Name: 'Lambda test',
              DestinationDefinition: {
                ID: '2CoiaHPaRb79wpSG3wZWfrG3B0n',
                Name: 'LAMBDA',
                DisplayName: 'AWS Lambda',
                Config: {
                  destConfig: {
                    defaultConfig: [
                      'region',
                      'accessKeyId',
                      'accessKey',
                      'lambda',
                      'invocationType',
                      'enableBatchInput',
                      'clientContext',
                    ],
                  },
                  excludeKeys: [],
                  includeKeys: [],
                  saveDestinationResponse: true,
                  secretKeys: ['accessKeyId', 'accessKey'],
                  supportedMessageTypes: ['identify', 'page', 'screen', 'track', 'alias', 'group'],
                  supportedSourceTypes: [
                    'amp',
                    'android',
                    'cordova',
                    'cloud',
                    'flutter',
                    'ios',
                    'reactnative',
                    'unity',
                    'warehouse',
                    'web',
                  ],
                  transformAt: 'router',
                  transformAtV1: 'router',
                },
                ResponseRules: {},
              },
              Enabled: true,
              Transformations: [],
              IsProcessorEnabled: true,
              RevisionID: '2CojwWiWjNghiGbfuRcwfs6Bt5q',
            },
          },
        ],
        method: 'POST',
      },
      pathSuffix: '',
    },
    output: {
      response: {
        status: 200,
        body: [
          {
            error: 'destination.Config cannot be undefined',
            metadata: {
              userId: 'user113<<>>user113',
              jobId: 10,
              sourceId: '2CFEootdF2eQh0CGeD0jdVybP5A',
              destinationId: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              attemptNum: 0,
              receivedAt: '2022-08-03T10:44:54.943+05:30',
              createdAt: '2022-08-03T05:14:55.384Z',
              firstAttemptedAt: '',
              transformAt: 'router',
              workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              secret: null,
              jobsT: {
                UUID: '53927e88-2d5c-4274-ad72-2e1c14a96301',
                JobID: 10,
                UserID: 'user113<<>>user113',
                CreatedAt: '2022-08-03T05:14:55.384207Z',
                ExpireAt: '2022-08-03T05:14:55.384207Z',
                CustomVal: 'LAMBDA',
                EventCount: 1,
                EventPayload: {
                  type: 'identify',
                  sentAt: '2022-08-03T10:44:55.382+05:30',
                  userId: 'user113',
                  context: {
                    os: { name: 'android' },
                    device: { name: 'Mi', token: 'qwertyuioprtyuiop' },
                    traits: { name: 'User2', email: 'user112@mail.com' },
                  },
                  rudderId: 'ed33ef22-569d-44b1-a6cb-063c69dca8f0',
                  messageId: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  timestamp: '2022-08-03T10:44:54.942+05:30',
                  receivedAt: '2022-08-03T10:44:54.943+05:30',
                  request_ip: '[::1]',
                  originalTimestamp: '2022-08-03T10:44:55.382+05:30',
                },
                PayloadSize: 550,
                LastJobStatus: {
                  JobID: 0,
                  JobState: '',
                  AttemptNum: 0,
                  ExecTime: '0001-01-01T00:00:00Z',
                  RetryTime: '0001-01-01T00:00:00Z',
                  ErrorCode: '',
                  ErrorResponse: null,
                  Parameters: null,
                  WorkspaceId: '',
                },
                Parameters: {
                  record_id: null,
                  source_id: '2CFEootdF2eQh0CGeD0jdVybP5A',
                  event_name: '',
                  event_type: 'identify',
                  message_id: '29beef33-2771-45fd-adb4-4376aa6d72d9',
                  received_at: '2022-08-03T10:44:54.943+05:30',
                  workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
                  transform_at: 'router',
                  source_job_id: '',
                  destination_id: '2CojwY2YqpiTqfBPrMAUN8orgHA',
                  gateway_job_id: 10,
                  source_task_id: '',
                  source_batch_id: '',
                  source_category: '',
                  source_job_run_id: '',
                  source_task_run_id: '',
                  source_definition_id: '2CCxgViQJACgWABA6h83wlXnE1k',
                  destination_definition_id: '',
                },
                WorkspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              },
              pickedAtTime: '2022-08-03T10:44:56.193361+05:30',
              resultSetID: 10,
            },
            statTags: {
              destType: 'LAMBDA',
              errorCategory: 'dataValidation',
              destinationId: '2CojwY2YqpiTqfBPrMAUN8orgHA',
              workspaceId: '2ANaDOTAzxboCOF86FkRGMEJ5F7',
              errorType: 'configuration',
              feature: 'processor',
              implementation: 'native',
              module: 'destination',
            },
            statusCode: 400,
          },
        ],
      },
    },
  },
];
