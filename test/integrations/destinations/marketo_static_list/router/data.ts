export const data = [
  {
    name: 'marketo_static_list',
    description:
      'Test 0: Test audiencelist event with add and remove: Test eventtype lowercase and uppercase',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                userId: 'user 1',
                anonymousId: 'anon-id-new',
                event: 'event1',
                type: 'audiencelist',
                properties: {
                  listData: {
                    add: [
                      {
                        id: 1,
                      },
                      {
                        id: 2,
                      },
                      {
                        id: 3,
                      },
                    ],
                    remove: [
                      {
                        id: 4,
                      },
                      {
                        id: 5,
                      },
                      {
                        id: 6,
                      },
                    ],
                  },
                  enablePartialFailure: true,
                },
                context: {
                  ip: '14.5.67.21',
                  library: {
                    name: 'http',
                  },
                },
                timestamp: '2020-02-02T00:23:09.544Z',
              },
              metadata: {
                jobId: 1,
              },
            },
            {
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                userId: 'user 1',
                anonymousId: 'anon-id-new',
                event: 'event1',
                type: 'audienceList',
                properties: {
                  listData: {
                    add: [
                      {
                        id: 0,
                      },
                      {
                        id: 1,
                      },
                      {
                        id: 2,
                      },
                      {
                        id: 3,
                      },
                      {
                        id: 4,
                      },
                      {
                        id: 5,
                      },
                      {
                        id: 6,
                      },
                      {
                        id: 7,
                      },
                      {
                        id: 8,
                      },
                      {
                        id: 9,
                      },
                      {
                        id: 10,
                      },
                      {
                        id: 11,
                      },
                      {
                        id: 12,
                      },
                      {
                        id: 13,
                      },
                      {
                        id: 14,
                      },
                      {
                        id: 15,
                      },
                      {
                        id: 16,
                      },
                      {
                        id: 17,
                      },
                      {
                        id: 18,
                      },
                      {
                        id: 19,
                      },
                      {
                        id: 20,
                      },
                      {
                        id: 21,
                      },
                      {
                        id: 22,
                      },
                      {
                        id: 23,
                      },
                      {
                        id: 24,
                      },
                      {
                        id: 25,
                      },
                      {
                        id: 26,
                      },
                      {
                        id: 27,
                      },
                      {
                        id: 28,
                      },
                      {
                        id: 29,
                      },
                      {
                        id: 30,
                      },
                      {
                        id: 31,
                      },
                      {
                        id: 32,
                      },
                      {
                        id: 33,
                      },
                      {
                        id: 34,
                      },
                      {
                        id: 35,
                      },
                      {
                        id: 36,
                      },
                      {
                        id: 37,
                      },
                      {
                        id: 38,
                      },
                      {
                        id: 39,
                      },
                      {
                        id: 40,
                      },
                      {
                        id: 41,
                      },
                      {
                        id: 42,
                      },
                      {
                        id: 43,
                      },
                      {
                        id: 44,
                      },
                      {
                        id: 45,
                      },
                      {
                        id: 46,
                      },
                      {
                        id: 47,
                      },
                      {
                        id: 48,
                      },
                      {
                        id: 49,
                      },
                      {
                        id: 50,
                      },
                      {
                        id: 51,
                      },
                      {
                        id: 52,
                      },
                      {
                        id: 53,
                      },
                      {
                        id: 54,
                      },
                      {
                        id: 55,
                      },
                      {
                        id: 56,
                      },
                      {
                        id: 57,
                      },
                      {
                        id: 58,
                      },
                      {
                        id: 59,
                      },
                      {
                        id: 60,
                      },
                      {
                        id: 61,
                      },
                      {
                        id: 62,
                      },
                      {
                        id: 63,
                      },
                      {
                        id: 64,
                      },
                      {
                        id: 65,
                      },
                      {
                        id: 66,
                      },
                      {
                        id: 67,
                      },
                      {
                        id: 68,
                      },
                      {
                        id: 69,
                      },
                      {
                        id: 70,
                      },
                      {
                        id: 71,
                      },
                      {
                        id: 72,
                      },
                      {
                        id: 73,
                      },
                      {
                        id: 74,
                      },
                      {
                        id: 75,
                      },
                      {
                        id: 76,
                      },
                      {
                        id: 77,
                      },
                      {
                        id: 78,
                      },
                      {
                        id: 79,
                      },
                      {
                        id: 80,
                      },
                      {
                        id: 81,
                      },
                      {
                        id: 82,
                      },
                      {
                        id: 83,
                      },
                      {
                        id: 84,
                      },
                      {
                        id: 85,
                      },
                      {
                        id: 86,
                      },
                      {
                        id: 87,
                      },
                      {
                        id: 88,
                      },
                      {
                        id: 89,
                      },
                      {
                        id: 90,
                      },
                      {
                        id: 91,
                      },
                      {
                        id: 92,
                      },
                      {
                        id: 93,
                      },
                      {
                        id: 94,
                      },
                      {
                        id: 95,
                      },
                      {
                        id: 96,
                      },
                      {
                        id: 97,
                      },
                      {
                        id: 98,
                      },
                      {
                        id: 99,
                      },
                      {
                        id: 100,
                      },
                      {
                        id: 101,
                      },
                      {
                        id: 102,
                      },
                      {
                        id: 103,
                      },
                      {
                        id: 104,
                      },
                      {
                        id: 105,
                      },
                      {
                        id: 106,
                      },
                      {
                        id: 107,
                      },
                      {
                        id: 108,
                      },
                      {
                        id: 109,
                      },
                      {
                        id: 110,
                      },
                      {
                        id: 111,
                      },
                      {
                        id: 112,
                      },
                      {
                        id: 113,
                      },
                      {
                        id: 114,
                      },
                      {
                        id: 115,
                      },
                      {
                        id: 116,
                      },
                      {
                        id: 117,
                      },
                      {
                        id: 118,
                      },
                      {
                        id: 119,
                      },
                      {
                        id: 120,
                      },
                      {
                        id: 121,
                      },
                      {
                        id: 122,
                      },
                      {
                        id: 123,
                      },
                      {
                        id: 124,
                      },
                      {
                        id: 125,
                      },
                      {
                        id: 126,
                      },
                      {
                        id: 127,
                      },
                      {
                        id: 128,
                      },
                      {
                        id: 129,
                      },
                      {
                        id: 130,
                      },
                      {
                        id: 131,
                      },
                      {
                        id: 132,
                      },
                      {
                        id: 133,
                      },
                      {
                        id: 134,
                      },
                      {
                        id: 135,
                      },
                      {
                        id: 136,
                      },
                      {
                        id: 137,
                      },
                      {
                        id: 138,
                      },
                      {
                        id: 139,
                      },
                      {
                        id: 140,
                      },
                      {
                        id: 141,
                      },
                      {
                        id: 142,
                      },
                      {
                        id: 143,
                      },
                      {
                        id: 144,
                      },
                      {
                        id: 145,
                      },
                      {
                        id: 146,
                      },
                      {
                        id: 147,
                      },
                      {
                        id: 148,
                      },
                      {
                        id: 149,
                      },
                      {
                        id: 150,
                      },
                      {
                        id: 151,
                      },
                      {
                        id: 152,
                      },
                      {
                        id: 153,
                      },
                      {
                        id: 154,
                      },
                      {
                        id: 155,
                      },
                      {
                        id: 156,
                      },
                      {
                        id: 157,
                      },
                      {
                        id: 158,
                      },
                      {
                        id: 159,
                      },
                      {
                        id: 160,
                      },
                      {
                        id: 161,
                      },
                      {
                        id: 162,
                      },
                      {
                        id: 163,
                      },
                      {
                        id: 164,
                      },
                      {
                        id: 165,
                      },
                      {
                        id: 166,
                      },
                      {
                        id: 167,
                      },
                      {
                        id: 168,
                      },
                      {
                        id: 169,
                      },
                      {
                        id: 170,
                      },
                      {
                        id: 171,
                      },
                      {
                        id: 172,
                      },
                      {
                        id: 173,
                      },
                      {
                        id: 174,
                      },
                      {
                        id: 175,
                      },
                      {
                        id: 176,
                      },
                      {
                        id: 177,
                      },
                      {
                        id: 178,
                      },
                      {
                        id: 179,
                      },
                      {
                        id: 180,
                      },
                      {
                        id: 181,
                      },
                      {
                        id: 182,
                      },
                      {
                        id: 183,
                      },
                      {
                        id: 184,
                      },
                      {
                        id: 185,
                      },
                      {
                        id: 186,
                      },
                      {
                        id: 187,
                      },
                      {
                        id: 188,
                      },
                      {
                        id: 189,
                      },
                      {
                        id: 190,
                      },
                      {
                        id: 191,
                      },
                      {
                        id: 192,
                      },
                      {
                        id: 193,
                      },
                      {
                        id: 194,
                      },
                      {
                        id: 195,
                      },
                      {
                        id: 196,
                      },
                      {
                        id: 197,
                      },
                      {
                        id: 198,
                      },
                      {
                        id: 199,
                      },
                      {
                        id: 200,
                      },
                      {
                        id: 201,
                      },
                      {
                        id: 202,
                      },
                      {
                        id: 203,
                      },
                      {
                        id: 204,
                      },
                      {
                        id: 205,
                      },
                      {
                        id: 206,
                      },
                      {
                        id: 207,
                      },
                      {
                        id: 208,
                      },
                      {
                        id: 209,
                      },
                      {
                        id: 210,
                      },
                      {
                        id: 211,
                      },
                      {
                        id: 212,
                      },
                      {
                        id: 213,
                      },
                      {
                        id: 214,
                      },
                      {
                        id: 215,
                      },
                      {
                        id: 216,
                      },
                      {
                        id: 217,
                      },
                      {
                        id: 218,
                      },
                      {
                        id: 219,
                      },
                      {
                        id: 220,
                      },
                      {
                        id: 221,
                      },
                      {
                        id: 222,
                      },
                      {
                        id: 223,
                      },
                      {
                        id: 224,
                      },
                      {
                        id: 225,
                      },
                      {
                        id: 226,
                      },
                      {
                        id: 227,
                      },
                      {
                        id: 228,
                      },
                      {
                        id: 229,
                      },
                      {
                        id: 230,
                      },
                      {
                        id: 231,
                      },
                      {
                        id: 232,
                      },
                      {
                        id: 233,
                      },
                      {
                        id: 234,
                      },
                      {
                        id: 235,
                      },
                      {
                        id: 236,
                      },
                      {
                        id: 237,
                      },
                      {
                        id: 238,
                      },
                      {
                        id: 239,
                      },
                      {
                        id: 240,
                      },
                      {
                        id: 241,
                      },
                      {
                        id: 242,
                      },
                      {
                        id: 243,
                      },
                      {
                        id: 244,
                      },
                      {
                        id: 245,
                      },
                      {
                        id: 246,
                      },
                      {
                        id: 247,
                      },
                      {
                        id: 248,
                      },
                      {
                        id: 249,
                      },
                      {
                        id: 250,
                      },
                      {
                        id: 251,
                      },
                      {
                        id: 252,
                      },
                      {
                        id: 253,
                      },
                      {
                        id: 254,
                      },
                      {
                        id: 255,
                      },
                      {
                        id: 256,
                      },
                      {
                        id: 257,
                      },
                      {
                        id: 258,
                      },
                      {
                        id: 259,
                      },
                      {
                        id: 260,
                      },
                      {
                        id: 261,
                      },
                      {
                        id: 262,
                      },
                      {
                        id: 263,
                      },
                      {
                        id: 264,
                      },
                      {
                        id: 265,
                      },
                      {
                        id: 266,
                      },
                      {
                        id: 267,
                      },
                      {
                        id: 268,
                      },
                      {
                        id: 269,
                      },
                      {
                        id: 270,
                      },
                      {
                        id: 271,
                      },
                      {
                        id: 272,
                      },
                      {
                        id: 273,
                      },
                      {
                        id: 274,
                      },
                      {
                        id: 275,
                      },
                      {
                        id: 276,
                      },
                      {
                        id: 277,
                      },
                      {
                        id: 278,
                      },
                      {
                        id: 279,
                      },
                      {
                        id: 280,
                      },
                      {
                        id: 281,
                      },
                      {
                        id: 282,
                      },
                      {
                        id: 283,
                      },
                      {
                        id: 284,
                      },
                      {
                        id: 285,
                      },
                      {
                        id: 286,
                      },
                      {
                        id: 287,
                      },
                      {
                        id: 288,
                      },
                      {
                        id: 289,
                      },
                      {
                        id: 290,
                      },
                      {
                        id: 291,
                      },
                      {
                        id: 292,
                      },
                      {
                        id: 293,
                      },
                      {
                        id: 294,
                      },
                      {
                        id: 295,
                      },
                      {
                        id: 296,
                      },
                      {
                        id: 297,
                      },
                      {
                        id: 298,
                      },
                      {
                        id: 299,
                      },
                      {
                        id: 300,
                      },
                      {
                        id: 301,
                      },
                      {
                        id: 302,
                      },
                      {
                        id: 303,
                      },
                      {
                        id: 304,
                      },
                      {
                        id: 305,
                      },
                      {
                        id: 306,
                      },
                      {
                        id: 307,
                      },
                      {
                        id: 308,
                      },
                      {
                        id: 309,
                      },
                      {
                        id: 310,
                      },
                      {
                        id: 311,
                      },
                      {
                        id: 312,
                      },
                      {
                        id: 313,
                      },
                      {
                        id: 314,
                      },
                      {
                        id: 315,
                      },
                      {
                        id: 316,
                      },
                      {
                        id: 317,
                      },
                      {
                        id: 318,
                      },
                      {
                        id: 319,
                      },
                      {
                        id: 320,
                      },
                      {
                        id: 321,
                      },
                      {
                        id: 322,
                      },
                      {
                        id: 323,
                      },
                      {
                        id: 324,
                      },
                      {
                        id: 325,
                      },
                      {
                        id: 326,
                      },
                      {
                        id: 327,
                      },
                      {
                        id: 328,
                      },
                      {
                        id: 329,
                      },
                      {
                        id: 330,
                      },
                      {
                        id: 331,
                      },
                      {
                        id: 332,
                      },
                      {
                        id: 333,
                      },
                      {
                        id: 334,
                      },
                      {
                        id: 335,
                      },
                      {
                        id: 336,
                      },
                      {
                        id: 337,
                      },
                      {
                        id: 338,
                      },
                      {
                        id: 339,
                      },
                      {
                        id: 340,
                      },
                      {
                        id: 341,
                      },
                      {
                        id: 342,
                      },
                      {
                        id: 343,
                      },
                      {
                        id: 344,
                      },
                      {
                        id: 345,
                      },
                      {
                        id: 346,
                      },
                      {
                        id: 347,
                      },
                      {
                        id: 348,
                      },
                      {
                        id: 349,
                      },
                      {
                        id: 350,
                      },
                    ],
                  },
                  enablePartialFailure: true,
                },
                context: {
                  ip: '14.5.67.21',
                  library: {
                    name: 'http',
                  },
                },
                timestamp: '2020-02-02T00:23:09.544Z',
              },
              metadata: {
                jobId: 2,
              },
            },
          ],
          destType: 'marketo_static_list',
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
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'DELETE',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=4&id=5&id=6',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=1&id=2&id=3',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  destInfo: {
                    authKey: '1zia9wKshXt80YksLmUdJnr7IHI',
                  },
                  jobId: 1,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=0&id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9&id=10&id=11&id=12&id=13&id=14&id=15&id=16&id=17&id=18&id=19&id=20&id=21&id=22&id=23&id=24&id=25&id=26&id=27&id=28&id=29&id=30&id=31&id=32&id=33&id=34&id=35&id=36&id=37&id=38&id=39&id=40&id=41&id=42&id=43&id=44&id=45&id=46&id=47&id=48&id=49&id=50&id=51&id=52&id=53&id=54&id=55&id=56&id=57&id=58&id=59&id=60&id=61&id=62&id=63&id=64&id=65&id=66&id=67&id=68&id=69&id=70&id=71&id=72&id=73&id=74&id=75&id=76&id=77&id=78&id=79&id=80&id=81&id=82&id=83&id=84&id=85&id=86&id=87&id=88&id=89&id=90&id=91&id=92&id=93&id=94&id=95&id=96&id=97&id=98&id=99&id=100&id=101&id=102&id=103&id=104&id=105&id=106&id=107&id=108&id=109&id=110&id=111&id=112&id=113&id=114&id=115&id=116&id=117&id=118&id=119&id=120&id=121&id=122&id=123&id=124&id=125&id=126&id=127&id=128&id=129&id=130&id=131&id=132&id=133&id=134&id=135&id=136&id=137&id=138&id=139&id=140&id=141&id=142&id=143&id=144&id=145&id=146&id=147&id=148&id=149&id=150&id=151&id=152&id=153&id=154&id=155&id=156&id=157&id=158&id=159&id=160&id=161&id=162&id=163&id=164&id=165&id=166&id=167&id=168&id=169&id=170&id=171&id=172&id=173&id=174&id=175&id=176&id=177&id=178&id=179&id=180&id=181&id=182&id=183&id=184&id=185&id=186&id=187&id=188&id=189&id=190&id=191&id=192&id=193&id=194&id=195&id=196&id=197&id=198&id=199&id=200&id=201&id=202&id=203&id=204&id=205&id=206&id=207&id=208&id=209&id=210&id=211&id=212&id=213&id=214&id=215&id=216&id=217&id=218&id=219&id=220&id=221&id=222&id=223&id=224&id=225&id=226&id=227&id=228&id=229&id=230&id=231&id=232&id=233&id=234&id=235&id=236&id=237&id=238&id=239&id=240&id=241&id=242&id=243&id=244&id=245&id=246&id=247&id=248&id=249&id=250&id=251&id=252&id=253&id=254&id=255&id=256&id=257&id=258&id=259&id=260&id=261&id=262&id=263&id=264&id=265&id=266&id=267&id=268&id=269&id=270&id=271&id=272&id=273&id=274&id=275&id=276&id=277&id=278&id=279&id=280&id=281&id=282&id=283&id=284&id=285&id=286&id=287&id=288&id=289&id=290&id=291&id=292&id=293&id=294&id=295&id=296&id=297&id=298&id=299',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=300&id=301&id=302&id=303&id=304&id=305&id=306&id=307&id=308&id=309&id=310&id=311&id=312&id=313&id=314&id=315&id=316&id=317&id=318&id=319&id=320&id=321&id=322&id=323&id=324&id=325&id=326&id=327&id=328&id=329&id=330&id=331&id=332&id=333&id=334&id=335&id=336&id=337&id=338&id=339&id=340&id=341&id=342&id=343&id=344&id=345&id=346&id=347&id=348&id=349&id=350',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  destInfo: {
                    authKey: '1zia9wKshXt80YksLmUdJnr7IHI',
                  },
                  jobId: 2,
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
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
    name: 'marketo_static_list',
    description: 'Test 1: Test record and audiencelist events in a single batch',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          input: [
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1001,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      identifierType: 'id',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 1,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1002,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      identifierType: 'id',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 2,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1003,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      identifierType: 'id',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 3,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      identifierType: 'id',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2001',
                },
                type: 'record',
              },
              metadata: {
                jobId: 4,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      identifierType: 'id',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2002',
                },
                type: 'record',
              },
              metadata: {
                jobId: 5,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      identifierType: 'id',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2003',
                },
                type: 'record',
              },
              metadata: {
                jobId: 6,
              },
            },
            {
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo_al',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                userId: 'user 1',
                anonymousId: 'anon-id-new',
                event: 'event1',
                type: 'audiencelist',
                properties: {
                  listData: {
                    add: [
                      {
                        id: 101,
                      },
                      {
                        id: 102,
                      },
                      {
                        id: 103,
                      },
                    ],
                    remove: [
                      {
                        id: 4,
                      },
                      {
                        id: 5,
                      },
                      {
                        id: 6,
                      },
                    ],
                  },
                  enablePartialFailure: true,
                },
                context: {
                  ip: '14.5.67.21',
                  library: {
                    name: 'http',
                  },
                },
                timestamp: '2020-02-02T00:23:09.544Z',
              },
              metadata: {
                jobId: 7,
              },
            },
            {
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo_al',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                userId: 'user 1',
                anonymousId: 'anon-id-new',
                event: 'event1',
                type: 'audiencelist',
                properties: {
                  listData: {
                    add: [
                      {
                        id: 0,
                      },
                      {
                        id: 1,
                      },
                      {
                        id: 2,
                      },
                      {
                        id: 3,
                      },
                      {
                        id: 4,
                      },
                      {
                        id: 5,
                      },
                      {
                        id: 6,
                      },
                      {
                        id: 7,
                      },
                      {
                        id: 8,
                      },
                      {
                        id: 9,
                      },
                      {
                        id: 10,
                      },
                      {
                        id: 11,
                      },
                      {
                        id: 12,
                      },
                      {
                        id: 13,
                      },
                      {
                        id: 14,
                      },
                      {
                        id: 15,
                      },
                      {
                        id: 16,
                      },
                      {
                        id: 17,
                      },
                      {
                        id: 18,
                      },
                      {
                        id: 19,
                      },
                      {
                        id: 20,
                      },
                      {
                        id: 21,
                      },
                      {
                        id: 22,
                      },
                      {
                        id: 23,
                      },
                      {
                        id: 24,
                      },
                      {
                        id: 25,
                      },
                      {
                        id: 26,
                      },
                      {
                        id: 27,
                      },
                      {
                        id: 28,
                      },
                      {
                        id: 29,
                      },
                      {
                        id: 30,
                      },
                      {
                        id: 31,
                      },
                      {
                        id: 32,
                      },
                      {
                        id: 33,
                      },
                      {
                        id: 34,
                      },
                      {
                        id: 35,
                      },
                      {
                        id: 36,
                      },
                      {
                        id: 37,
                      },
                      {
                        id: 38,
                      },
                      {
                        id: 39,
                      },
                      {
                        id: 40,
                      },
                      {
                        id: 41,
                      },
                      {
                        id: 42,
                      },
                      {
                        id: 43,
                      },
                      {
                        id: 44,
                      },
                      {
                        id: 45,
                      },
                      {
                        id: 46,
                      },
                      {
                        id: 47,
                      },
                      {
                        id: 48,
                      },
                      {
                        id: 49,
                      },
                      {
                        id: 50,
                      },
                      {
                        id: 51,
                      },
                      {
                        id: 52,
                      },
                      {
                        id: 53,
                      },
                      {
                        id: 54,
                      },
                      {
                        id: 55,
                      },
                      {
                        id: 56,
                      },
                      {
                        id: 57,
                      },
                      {
                        id: 58,
                      },
                      {
                        id: 59,
                      },
                      {
                        id: 60,
                      },
                      {
                        id: 61,
                      },
                      {
                        id: 62,
                      },
                      {
                        id: 63,
                      },
                      {
                        id: 64,
                      },
                      {
                        id: 65,
                      },
                      {
                        id: 66,
                      },
                      {
                        id: 67,
                      },
                      {
                        id: 68,
                      },
                      {
                        id: 69,
                      },
                      {
                        id: 70,
                      },
                      {
                        id: 71,
                      },
                      {
                        id: 72,
                      },
                      {
                        id: 73,
                      },
                      {
                        id: 74,
                      },
                      {
                        id: 75,
                      },
                      {
                        id: 76,
                      },
                      {
                        id: 77,
                      },
                      {
                        id: 78,
                      },
                      {
                        id: 79,
                      },
                      {
                        id: 80,
                      },
                      {
                        id: 81,
                      },
                      {
                        id: 82,
                      },
                      {
                        id: 83,
                      },
                      {
                        id: 84,
                      },
                      {
                        id: 85,
                      },
                      {
                        id: 86,
                      },
                      {
                        id: 87,
                      },
                      {
                        id: 88,
                      },
                      {
                        id: 89,
                      },
                      {
                        id: 90,
                      },
                      {
                        id: 91,
                      },
                      {
                        id: 92,
                      },
                      {
                        id: 93,
                      },
                      {
                        id: 94,
                      },
                      {
                        id: 95,
                      },
                      {
                        id: 96,
                      },
                      {
                        id: 97,
                      },
                      {
                        id: 98,
                      },
                      {
                        id: 99,
                      },
                      {
                        id: 100,
                      },
                      {
                        id: 101,
                      },
                      {
                        id: 102,
                      },
                      {
                        id: 103,
                      },
                      {
                        id: 104,
                      },
                      {
                        id: 105,
                      },
                      {
                        id: 106,
                      },
                      {
                        id: 107,
                      },
                      {
                        id: 108,
                      },
                      {
                        id: 109,
                      },
                      {
                        id: 110,
                      },
                      {
                        id: 111,
                      },
                      {
                        id: 112,
                      },
                      {
                        id: 113,
                      },
                      {
                        id: 114,
                      },
                      {
                        id: 115,
                      },
                      {
                        id: 116,
                      },
                      {
                        id: 117,
                      },
                      {
                        id: 118,
                      },
                      {
                        id: 119,
                      },
                      {
                        id: 120,
                      },
                      {
                        id: 121,
                      },
                      {
                        id: 122,
                      },
                      {
                        id: 123,
                      },
                      {
                        id: 124,
                      },
                      {
                        id: 125,
                      },
                      {
                        id: 126,
                      },
                      {
                        id: 127,
                      },
                      {
                        id: 128,
                      },
                      {
                        id: 129,
                      },
                      {
                        id: 130,
                      },
                      {
                        id: 131,
                      },
                      {
                        id: 132,
                      },
                      {
                        id: 133,
                      },
                      {
                        id: 134,
                      },
                      {
                        id: 135,
                      },
                      {
                        id: 136,
                      },
                      {
                        id: 137,
                      },
                      {
                        id: 138,
                      },
                      {
                        id: 139,
                      },
                      {
                        id: 140,
                      },
                      {
                        id: 141,
                      },
                      {
                        id: 142,
                      },
                      {
                        id: 143,
                      },
                      {
                        id: 144,
                      },
                      {
                        id: 145,
                      },
                      {
                        id: 146,
                      },
                      {
                        id: 147,
                      },
                      {
                        id: 148,
                      },
                      {
                        id: 149,
                      },
                      {
                        id: 150,
                      },
                      {
                        id: 151,
                      },
                      {
                        id: 152,
                      },
                      {
                        id: 153,
                      },
                      {
                        id: 154,
                      },
                      {
                        id: 155,
                      },
                      {
                        id: 156,
                      },
                      {
                        id: 157,
                      },
                      {
                        id: 158,
                      },
                      {
                        id: 159,
                      },
                      {
                        id: 160,
                      },
                      {
                        id: 161,
                      },
                      {
                        id: 162,
                      },
                      {
                        id: 163,
                      },
                      {
                        id: 164,
                      },
                      {
                        id: 165,
                      },
                      {
                        id: 166,
                      },
                      {
                        id: 167,
                      },
                      {
                        id: 168,
                      },
                      {
                        id: 169,
                      },
                      {
                        id: 170,
                      },
                      {
                        id: 171,
                      },
                      {
                        id: 172,
                      },
                      {
                        id: 173,
                      },
                      {
                        id: 174,
                      },
                      {
                        id: 175,
                      },
                      {
                        id: 176,
                      },
                      {
                        id: 177,
                      },
                      {
                        id: 178,
                      },
                      {
                        id: 179,
                      },
                      {
                        id: 180,
                      },
                      {
                        id: 181,
                      },
                      {
                        id: 182,
                      },
                      {
                        id: 183,
                      },
                      {
                        id: 184,
                      },
                      {
                        id: 185,
                      },
                      {
                        id: 186,
                      },
                      {
                        id: 187,
                      },
                      {
                        id: 188,
                      },
                      {
                        id: 189,
                      },
                      {
                        id: 190,
                      },
                      {
                        id: 191,
                      },
                      {
                        id: 192,
                      },
                      {
                        id: 193,
                      },
                      {
                        id: 194,
                      },
                      {
                        id: 195,
                      },
                      {
                        id: 196,
                      },
                      {
                        id: 197,
                      },
                      {
                        id: 198,
                      },
                      {
                        id: 199,
                      },
                      {
                        id: 200,
                      },
                      {
                        id: 201,
                      },
                      {
                        id: 202,
                      },
                      {
                        id: 203,
                      },
                      {
                        id: 204,
                      },
                      {
                        id: 205,
                      },
                      {
                        id: 206,
                      },
                      {
                        id: 207,
                      },
                      {
                        id: 208,
                      },
                      {
                        id: 209,
                      },
                      {
                        id: 210,
                      },
                      {
                        id: 211,
                      },
                      {
                        id: 212,
                      },
                      {
                        id: 213,
                      },
                      {
                        id: 214,
                      },
                      {
                        id: 215,
                      },
                      {
                        id: 216,
                      },
                      {
                        id: 217,
                      },
                      {
                        id: 218,
                      },
                      {
                        id: 219,
                      },
                      {
                        id: 220,
                      },
                      {
                        id: 221,
                      },
                      {
                        id: 222,
                      },
                      {
                        id: 223,
                      },
                      {
                        id: 224,
                      },
                      {
                        id: 225,
                      },
                      {
                        id: 226,
                      },
                      {
                        id: 227,
                      },
                      {
                        id: 228,
                      },
                      {
                        id: 229,
                      },
                      {
                        id: 230,
                      },
                      {
                        id: 231,
                      },
                      {
                        id: 232,
                      },
                      {
                        id: 233,
                      },
                      {
                        id: 234,
                      },
                      {
                        id: 235,
                      },
                      {
                        id: 236,
                      },
                      {
                        id: 237,
                      },
                      {
                        id: 238,
                      },
                      {
                        id: 239,
                      },
                      {
                        id: 240,
                      },
                      {
                        id: 241,
                      },
                      {
                        id: 242,
                      },
                      {
                        id: 243,
                      },
                      {
                        id: 244,
                      },
                      {
                        id: 245,
                      },
                      {
                        id: 246,
                      },
                      {
                        id: 247,
                      },
                      {
                        id: 248,
                      },
                      {
                        id: 249,
                      },
                      {
                        id: 250,
                      },
                      {
                        id: 251,
                      },
                      {
                        id: 252,
                      },
                      {
                        id: 253,
                      },
                      {
                        id: 254,
                      },
                      {
                        id: 255,
                      },
                      {
                        id: 256,
                      },
                      {
                        id: 257,
                      },
                      {
                        id: 258,
                      },
                      {
                        id: 259,
                      },
                      {
                        id: 260,
                      },
                      {
                        id: 261,
                      },
                      {
                        id: 262,
                      },
                      {
                        id: 263,
                      },
                      {
                        id: 264,
                      },
                      {
                        id: 265,
                      },
                      {
                        id: 266,
                      },
                      {
                        id: 267,
                      },
                      {
                        id: 268,
                      },
                      {
                        id: 269,
                      },
                      {
                        id: 270,
                      },
                      {
                        id: 271,
                      },
                      {
                        id: 272,
                      },
                      {
                        id: 273,
                      },
                      {
                        id: 274,
                      },
                      {
                        id: 275,
                      },
                      {
                        id: 276,
                      },
                      {
                        id: 277,
                      },
                      {
                        id: 278,
                      },
                      {
                        id: 279,
                      },
                      {
                        id: 280,
                      },
                      {
                        id: 281,
                      },
                      {
                        id: 282,
                      },
                      {
                        id: 283,
                      },
                      {
                        id: 284,
                      },
                      {
                        id: 285,
                      },
                      {
                        id: 286,
                      },
                      {
                        id: 287,
                      },
                      {
                        id: 288,
                      },
                      {
                        id: 289,
                      },
                      {
                        id: 290,
                      },
                      {
                        id: 291,
                      },
                      {
                        id: 292,
                      },
                      {
                        id: 293,
                      },
                      {
                        id: 294,
                      },
                      {
                        id: 295,
                      },
                      {
                        id: 296,
                      },
                      {
                        id: 297,
                      },
                      {
                        id: 298,
                      },
                      {
                        id: 299,
                      },
                      {
                        id: 300,
                      },
                      {
                        id: 301,
                      },
                      {
                        id: 302,
                      },
                      {
                        id: 303,
                      },
                      {
                        id: 304,
                      },
                      {
                        id: 305,
                      },
                      {
                        id: 306,
                      },
                      {
                        id: 307,
                      },
                      {
                        id: 308,
                      },
                      {
                        id: 309,
                      },
                      {
                        id: 310,
                      },
                      {
                        id: 311,
                      },
                      {
                        id: 312,
                      },
                      {
                        id: 313,
                      },
                      {
                        id: 314,
                      },
                      {
                        id: 315,
                      },
                      {
                        id: 316,
                      },
                      {
                        id: 317,
                      },
                      {
                        id: 318,
                      },
                      {
                        id: 319,
                      },
                      {
                        id: 320,
                      },
                      {
                        id: 321,
                      },
                      {
                        id: 322,
                      },
                      {
                        id: 323,
                      },
                      {
                        id: 324,
                      },
                      {
                        id: 325,
                      },
                      {
                        id: 326,
                      },
                      {
                        id: 327,
                      },
                      {
                        id: 328,
                      },
                      {
                        id: 329,
                      },
                      {
                        id: 330,
                      },
                      {
                        id: 331,
                      },
                      {
                        id: 332,
                      },
                      {
                        id: 333,
                      },
                      {
                        id: 334,
                      },
                      {
                        id: 335,
                      },
                      {
                        id: 336,
                      },
                      {
                        id: 337,
                      },
                      {
                        id: 338,
                      },
                      {
                        id: 339,
                      },
                      {
                        id: 340,
                      },
                      {
                        id: 341,
                      },
                      {
                        id: 342,
                      },
                      {
                        id: 343,
                      },
                      {
                        id: 344,
                      },
                      {
                        id: 345,
                      },
                      {
                        id: 346,
                      },
                      {
                        id: 347,
                      },
                      {
                        id: 348,
                      },
                      {
                        id: 349,
                      },
                      {
                        id: 350,
                      },
                    ],
                  },
                  enablePartialFailure: true,
                },
                context: {
                  ip: '14.5.67.21',
                  library: {
                    name: 'http',
                  },
                },
                timestamp: '2020-02-02T00:23:09.544Z',
              },
              metadata: {
                jobId: 8,
              },
            },
          ],
          destType: 'marketo_static_list',
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
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'DELETE',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1122/leads.json?id=2001&id=2002&id=2003',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 4,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 5,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 6,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1122/leads.json?id=1001&id=1002&id=1003',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 1,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 2,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 3,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'DELETE',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=4&id=5&id=6',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=101&id=102&id=103',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 7,
                  destInfo: {
                    authKey: '1zia9wKshXt80YksLmUdJnr7IHI',
                  },
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo_al',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=0&id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8&id=9&id=10&id=11&id=12&id=13&id=14&id=15&id=16&id=17&id=18&id=19&id=20&id=21&id=22&id=23&id=24&id=25&id=26&id=27&id=28&id=29&id=30&id=31&id=32&id=33&id=34&id=35&id=36&id=37&id=38&id=39&id=40&id=41&id=42&id=43&id=44&id=45&id=46&id=47&id=48&id=49&id=50&id=51&id=52&id=53&id=54&id=55&id=56&id=57&id=58&id=59&id=60&id=61&id=62&id=63&id=64&id=65&id=66&id=67&id=68&id=69&id=70&id=71&id=72&id=73&id=74&id=75&id=76&id=77&id=78&id=79&id=80&id=81&id=82&id=83&id=84&id=85&id=86&id=87&id=88&id=89&id=90&id=91&id=92&id=93&id=94&id=95&id=96&id=97&id=98&id=99&id=100&id=101&id=102&id=103&id=104&id=105&id=106&id=107&id=108&id=109&id=110&id=111&id=112&id=113&id=114&id=115&id=116&id=117&id=118&id=119&id=120&id=121&id=122&id=123&id=124&id=125&id=126&id=127&id=128&id=129&id=130&id=131&id=132&id=133&id=134&id=135&id=136&id=137&id=138&id=139&id=140&id=141&id=142&id=143&id=144&id=145&id=146&id=147&id=148&id=149&id=150&id=151&id=152&id=153&id=154&id=155&id=156&id=157&id=158&id=159&id=160&id=161&id=162&id=163&id=164&id=165&id=166&id=167&id=168&id=169&id=170&id=171&id=172&id=173&id=174&id=175&id=176&id=177&id=178&id=179&id=180&id=181&id=182&id=183&id=184&id=185&id=186&id=187&id=188&id=189&id=190&id=191&id=192&id=193&id=194&id=195&id=196&id=197&id=198&id=199&id=200&id=201&id=202&id=203&id=204&id=205&id=206&id=207&id=208&id=209&id=210&id=211&id=212&id=213&id=214&id=215&id=216&id=217&id=218&id=219&id=220&id=221&id=222&id=223&id=224&id=225&id=226&id=227&id=228&id=229&id=230&id=231&id=232&id=233&id=234&id=235&id=236&id=237&id=238&id=239&id=240&id=241&id=242&id=243&id=244&id=245&id=246&id=247&id=248&id=249&id=250&id=251&id=252&id=253&id=254&id=255&id=256&id=257&id=258&id=259&id=260&id=261&id=262&id=263&id=264&id=265&id=266&id=267&id=268&id=269&id=270&id=271&id=272&id=273&id=274&id=275&id=276&id=277&id=278&id=279&id=280&id=281&id=282&id=283&id=284&id=285&id=286&id=287&id=288&id=289&id=290&id=291&id=292&id=293&id=294&id=295&id=296&id=297&id=298&id=299',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/1234/leads.json?id=300&id=301&id=302&id=303&id=304&id=305&id=306&id=307&id=308&id=309&id=310&id=311&id=312&id=313&id=314&id=315&id=316&id=317&id=318&id=319&id=320&id=321&id=322&id=323&id=324&id=325&id=326&id=327&id=328&id=329&id=330&id=331&id=332&id=333&id=334&id=335&id=336&id=337&id=338&id=339&id=340&id=341&id=342&id=343&id=344&id=345&id=346&id=347&id=348&id=349&id=350',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 8,
                  destInfo: {
                    authKey: '1zia9wKshXt80YksLmUdJnr7IHI',
                  },
                },
              ],
              batched: false,
              statusCode: 200,
              destination: {
                ID: '1zia9wKshXt80YksLmUdJnr7IHI',
                Name: 'test_marketo_al',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1234,
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
    name: 'marketo_static_list',
    description: 'Test 2: Test record evemts',
    feature: 'router',
    module: 'destination',
    version: 'v0',
    input: {
      request: {
        body: {
          destType: 'marketo_static_list',
          input: [
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1001,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      id: 'id001',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 1,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1002,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      id: 'id002',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 2,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                type: 'record',
                action: 'insert',
                fields: {
                  id: 1003,
                },
                channel: 'sources',
                context: {
                  sources: {
                    job_id: '2VsZs4hyPpq7f1p8igrpmHsibHl',
                    version: 'feat.mirrorRetlEvent',
                    job_run_id: 'ck99nbd2kqiljdihhkh0',
                    task_run_id: 'ck99nbd2kqiljdihhkhg',
                  },
                  externalId: [
                    {
                      type: 'marketoStaticListId',
                      id: 'id001',
                    },
                  ],
                  destinationFields: 'id',
                  mappedToDestination: 'true',
                },
                recordId: '3',
              },
              metadata: {
                jobId: 3,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      id: 'id002',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2001',
                },
                type: 'record',
              },
              metadata: {
                jobId: 4,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      id: 'id001',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2002',
                },
                type: 'record',
              },
              metadata: {
                jobId: 5,
              },
            },
            {
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
              message: {
                action: 'delete',
                context: {
                  destinationFields: 'id',
                  externalId: [
                    {
                      id: 'id002',
                      type: 'marketoStaticListId',
                    },
                  ],
                  mappedToDestination: 'true',
                  sources: {
                    job_id: 'sf',
                    job_run_id: 'ck985bve58cvnti48120',
                    task_run_id: 'ck985bve58cvnti4812g',
                    version: '',
                  },
                },
                recordId: '2',
                rudderId: '2',
                fields: {
                  id: '2003',
                },
                type: 'record',
              },
              metadata: {
                jobId: 6,
              },
            },
          ],
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
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'DELETE',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/id001/leads.json?id=2002',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 5,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/id001/leads.json?id=1001&id=1003',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 1,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 3,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'DELETE',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/id002/leads.json?id=2001&id=2003',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 4,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
                {
                  jobId: 6,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
                },
                Enabled: true,
                Transformations: [],
                IsProcessorEnabled: true,
              },
            },
            {
              batchedRequest: [
                {
                  version: '1',
                  type: 'REST',
                  method: 'POST',
                  endpoint:
                    'https://marketo_acct_id_success.mktorest.com/rest/v1/lists/id002/leads.json?id=1002',
                  headers: {
                    Authorization: 'Bearer access_token_success',
                    'Content-Type': 'application/json',
                  },
                  params: {},
                  body: {
                    JSON: {},
                    JSON_ARRAY: {},
                    XML: {},
                    FORM: {},
                  },
                  files: {},
                },
              ],
              metadata: [
                {
                  jobId: 2,
                  destInfo: {
                    authKey: '1zwa1wKshSt81YksKmUdJnr4IOK',
                  },
                },
              ],
              batched: true,
              statusCode: 200,
              destination: {
                ID: '1zwa1wKshSt81YksKmUdJnr4IOK',
                Name: 'test_marketo_rc',
                DestinationDefinition: {
                  ID: '1iVQvTRMsPPyJzwol0ifH93QTQ6',
                  Name: 'MARKETO',
                  DisplayName: 'Marketo',
                  transformAt: 'processor',
                  transformAtV1: 'processor',
                },
                Config: {
                  clientId: 'marketo_client_id_success',
                  clientSecret: 'marketo_client_secret_success',
                  accountId: 'marketo_acct_id_success',
                  staticListId: 1122,
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
