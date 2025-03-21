import { authHeader1, secret1 } from '../maskedSecrets';
export const data = [
  {
    name: 'user',
    description: 'Succesfull Group call ',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              message: {
                channel: 'browser',
                context: {
                  userAgent:
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36',
                },
                integrations: { All: true },
                userId: 'user@123',
                groupId: 'group@795',
                messageId: '022bb90c-bbac-11e4-8dfc-aa07a5b093db',
                receivedAt: '2015-02-23T22:28:55.387Z',
                sentAt: '2015-02-23T22:28:55.111Z',
                timestamp: '2015-02-23T22:28:55.111Z',
                traits: {
                  name: 'rudder ventures',
                  email: 'business@rudderstack.com',
                  address: {
                    street: '6th St',
                    city: 'San Francisco',
                    state: 'CA',
                    postalCode: '94103',
                    country: 'USA',
                    owner: 'testuser',
                  },
                },
                type: 'group',
              },
              metadata: { jobId: 1, userId: 'u1' },
              destination: {
                Config: {
                  apiKey: secret1,
                  appSubdomain: 'commander',
                  userAttributesMapping: [{ from: 'useroccupation', to: 'occupation' }],
                  userEvents: [
                    {
                      rsEventName: 'login',
                      userEventName: 'product viewed',
                      eventProperties: [{ from: 'count', to: 'productcount' }],
                    },
                  ],
                  companyAttributesMapping: [
                    { from: 'category', to: 'companycategory' },
                    { from: 'owner', to: 'companyowner' },
                  ],
                },
              },
            },
          ],
          destType: 'user',
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
                body: {
                  XML: {},
                  FORM: {},
                  JSON: { user_id: 52, user_custom_id: 'user@123' },
                  JSON_ARRAY: {},
                },
                type: 'REST',
                files: {},
                method: 'POST',
                params: {},
                headers: {
                  Accept: '*/*;version=2',
                  'Content-Type': 'application/json',
                  Authorization: authHeader1,
                },
                version: '1',
                endpoint: 'https://commander.user.com/api/public/companies/21/add_member/',
              },
              metadata: [{ jobId: 1, userId: 'u1' }],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  apiKey: secret1,
                  appSubdomain: 'commander',
                  userAttributesMapping: [{ from: 'useroccupation', to: 'occupation' }],
                  userEvents: [
                    {
                      rsEventName: 'login',
                      userEventName: 'product viewed',
                      eventProperties: [{ from: 'count', to: 'productcount' }],
                    },
                  ],
                  companyAttributesMapping: [
                    { from: 'category', to: 'companycategory' },
                    { from: 'owner', to: 'companyowner' },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
  {
    name: 'user',
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
                userId: 'test@12',
                type: 'identify',
                context: {
                  traits: {
                    email: 'test@rudderstack.com',
                    firstName: 'test',
                    lastName: 'rudderstack',
                    age: 15,
                    gender: 'female',
                    status: 'visitor',
                    city: 'ahmedabad',
                    country: 'india',
                    phone: '9876543210',
                    useroccupation: 'mechanical engineer',
                  },
                },
                traits: { googleUrl: 'www.google.com' },
                integrations: { All: true, user: { lookup: 'email' } },
              },
              metadata: { jobId: 2, userId: 'u1' },
              destination: {
                Config: {
                  apiKey: secret1,
                  appSubdomain: 'commander',
                  userAttributesMapping: [{ from: 'useroccupation', to: 'occupation' }],
                  userEvents: [
                    {
                      rsEventName: 'login',
                      userEventName: 'product viewed',
                      eventProperties: [{ from: 'count', to: 'productcount' }],
                    },
                  ],
                  companyAttributesMapping: [
                    { from: 'category', to: 'companycategory' },
                    { from: 'owner', to: 'companyowner' },
                  ],
                },
              },
            },
          ],
          destType: 'user',
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
                body: {
                  XML: {},
                  FORM: {},
                  JSON: {
                    age: 15,
                    email: 'test@rudderstack.com',
                    gender: 3,
                    status: 1,
                    country: 'india',
                    custom_id: 'test@12',
                    last_name: 'rudderstack',
                    first_name: 'test',
                    google_url: 'www.google.com',
                    occupation: 'mechanical engineer',
                    phone_number: '9876543210',
                  },
                  JSON_ARRAY: {},
                },
                type: 'REST',
                files: {},
                method: 'PUT',
                params: {},
                headers: {
                  Accept: '*/*;version=2',
                  'Content-Type': 'application/json',
                  Authorization: authHeader1,
                },
                version: '1',
                endpoint: 'https://commander.user.com/api/public/users/59/',
              },
              metadata: [{ jobId: 2, userId: 'u1' }],
              batched: false,
              statusCode: 200,
              destination: {
                Config: {
                  apiKey: secret1,
                  appSubdomain: 'commander',
                  userAttributesMapping: [{ from: 'useroccupation', to: 'occupation' }],
                  userEvents: [
                    {
                      rsEventName: 'login',
                      userEventName: 'product viewed',
                      eventProperties: [{ from: 'count', to: 'productcount' }],
                    },
                  ],
                  companyAttributesMapping: [
                    { from: 'category', to: 'companycategory' },
                    { from: 'owner', to: 'companyowner' },
                  ],
                },
              },
            },
          ],
        },
      },
    },
  },
];
