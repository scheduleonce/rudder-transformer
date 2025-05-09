import utils from '../../../../src/v0/util';

export const data = [
  {
    name: 'appcenter',
    description: 'test-0',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                text: 'Hello from your abc-test app in App Center!',
                sent_at: '2023-01-02T07: 53: 28.3117824Z',
                url: 'https://appcenter.ms/users/abc-rudderstack.com/apps/abc-test',
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
            outputToSource: {
              body: 'eyJ0ZXh0IjoiSGVsbG8gZnJvbSB5b3VyIGFiYy10ZXN0IGFwcCBpbiBBcHAgQ2VudGVyISIsInNlbnRfYXQiOiIyMDIzLTAxLTAyVDA3OiA1MzogMjguMzExNzgyNFoiLCJ1cmwiOiJodHRwczovL2FwcGNlbnRlci5tcy91c2Vycy9hYmMtcnVkZGVyc3RhY2suY29tL2FwcHMvYWJjLXRlc3QifQ==',
              contentType: 'application/json',
            },
            statusCode: 200,
          },
        ],
      },
    },
  },
  {
    name: 'appcenter',
    description: 'test-1',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                app_name: 'MSAppCenterTesting',
                branch: 'master',
                build_status: 'Succeeded',
                build_id: '1',
                build_link:
                  'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/build/branches/master/builds/1',
                build_reason: 'manual',
                finish_time: '2021-03-02T16:41:29.891411Z',
                icon_link: null,
                notification_settings_link:
                  'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/settings/notifications',
                os: 'Android',
                start_time: '2021-03-02T16:34:13.9184874Z',
                source_version: '7ed5c7b279316f19e9a0c45bb0fb49c0655471af',
                sent_at: '2021-03-02T16:41:55.8819564Z',
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
                    integration: { name: 'APPCENTER' },
                    app: { name: 'MSAppCenterTesting', build: '1' },
                    device: { type: 'Android' },

                    os: { name: 'Android' },
                  },
                  integrations: { APPCENTER: false },
                  properties: {
                    app_name: 'MSAppCenterTesting',
                    branch: 'master',
                    build_status: 'Succeeded',
                    build_id: '1',
                    build_link:
                      'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/build/branches/master/builds/1',
                    build_reason: 'manual',
                    finish_time: '2021-03-02T16:41:29.891411Z',
                    icon_link: null,
                    notification_settings_link:
                      'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/settings/notifications',
                    os: 'Android',
                    start_time: '2021-03-02T16:34:13.9184874Z',
                    source_version: '7ed5c7b279316f19e9a0c45bb0fb49c0655471af',
                    sent_at: '2021-03-02T16:41:55.8819564Z',
                  },
                  type: 'track',
                  event: 'Build Succeeded',
                  originalTimeStamp: '2021-03-02T16:34:13.9184874Z',
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                  sentAt: '2021-03-02T16:41:55.8819564Z',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'appcenter',
    description: 'test-2',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                app_name: 'MSAppCenterTesting',
                branch: 'master',
                build_status: 'Broken',
                build_id: '2',
                build_link:
                  'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/build/branches/master/builds/2',
                build_reason: 'automatic',
                finish_time: '2021-03-02T16:52:04.2587506Z',
                icon_link: null,
                notification_settings_link:
                  'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/settings/notifications',
                os: 'Android',
                start_time: '2021-03-02T16:50:52.2584107Z',
                source_version: '0624e1e3e48eaf2371c37316208ff83bdd5c123b',
                sent_at: '2021-03-02T16:52:35.8848052Z',
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
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'APPCENTER' },
                    app: { name: 'MSAppCenterTesting', build: '2' },
                    device: { type: 'Android' },

                    os: { name: 'Android' },
                  },
                  integrations: { APPCENTER: false },
                  properties: {
                    app_name: 'MSAppCenterTesting',
                    branch: 'master',
                    build_status: 'Broken',
                    build_id: '2',
                    build_link:
                      'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/build/branches/master/builds/2',
                    build_reason: 'automatic',
                    finish_time: '2021-03-02T16:52:04.2587506Z',
                    icon_link: null,
                    notification_settings_link:
                      'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/settings/notifications',
                    os: 'Android',
                    start_time: '2021-03-02T16:50:52.2584107Z',
                    source_version: '0624e1e3e48eaf2371c37316208ff83bdd5c123b',
                    sent_at: '2021-03-02T16:52:35.8848052Z',
                  },
                  type: 'track',
                  event: 'Build Failed',
                  originalTimeStamp: '2021-03-02T16:50:52.2584107Z',
                  sentAt: '2021-03-02T16:52:35.8848052Z',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'appcenter',
    description: 'test-3',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                app_name: 'MSAppCenterTesting',
                app_display_name: 'MSAppCenterTesting',
                release_id: '1',
                platform: 'Android',
                uploaded_at: '2021-03-02T17:49:35.463Z',
                fingerprint: '9cbdc86d96c5359d2af3972fdda46624',
                release_notes: 'Degraded to 4.0.0',
                version: '1614707021',
                short_version: '1.0',
                min_os: '7.1',
                mandatory_update: true,
                size: 2919106,
                provisioning_profile_name: null,
                provisioning_profile_type: null,
                bundle_identifier: 'tech.desusai.msappcentertesting',
                install_link:
                  'https://install.appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/releases/1?source=email',
                icon_link:
                  'https://appcenter-filemanagement-distrib2ede6f06e.azureedge.net/dbbd3d57-9c09-448b-9782-0d57200f7c9b/ic_launcher.png?sv=2019-02-02&sr=c&sig=BNzQcMcvTbwf4fv59ByGiYXsr%2BA9PYDFyGJCqsE2RO0%3D&se=2021-03-09T17%3A49%3A35Z&sp=r',
                distribution_group_id: '00000000-0000-0000-0000-000000000000',
                installable: true,
                sent_at: '2021-03-02T17:49:37.127635Z',
                app_id: 'ce8b5280-4605-4c1c-8c48-bd54c8fdda31',
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
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'APPCENTER' },
                    app: {
                      name: 'MSAppCenterTesting',
                      version: '1.0',
                      namespace: 'tech.desusai.msappcentertesting',
                    },
                    device: { type: 'Android' },

                    os: { name: 'Android' },
                  },
                  integrations: { APPCENTER: false },
                  properties: {
                    app_name: 'MSAppCenterTesting',
                    app_display_name: 'MSAppCenterTesting',
                    release_id: '1',
                    platform: 'Android',
                    uploaded_at: '2021-03-02T17:49:35.463Z',
                    fingerprint: '9cbdc86d96c5359d2af3972fdda46624',
                    release_notes: 'Degraded to 4.0.0',
                    version: '1614707021',
                    short_version: '1.0',
                    min_os: '7.1',
                    mandatory_update: true,
                    size: 2919106,
                    provisioning_profile_name: null,
                    provisioning_profile_type: null,
                    bundle_identifier: 'tech.desusai.msappcentertesting',
                    install_link:
                      'https://install.appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/releases/1?source=email',
                    icon_link:
                      'https://appcenter-filemanagement-distrib2ede6f06e.azureedge.net/dbbd3d57-9c09-448b-9782-0d57200f7c9b/ic_launcher.png?sv=2019-02-02&sr=c&sig=BNzQcMcvTbwf4fv59ByGiYXsr%2BA9PYDFyGJCqsE2RO0%3D&se=2021-03-09T17%3A49%3A35Z&sp=r',
                    distribution_group_id: '00000000-0000-0000-0000-000000000000',
                    installable: true,
                    sent_at: '2021-03-02T17:49:37.127635Z',
                    app_id: 'ce8b5280-4605-4c1c-8c48-bd54c8fdda31',
                  },
                  type: 'track',
                  event: 'Released Version 1.0',
                  sentAt: '2021-03-02T17:49:37.127635Z',
                },
              ],
            },
          },
        ],
      },
    },
  },
  {
    name: 'appcenter',
    description: 'test-4',
    module: 'source',
    version: 'v2',
    input: {
      request: {
        body: [
          {
            request: {
              body: JSON.stringify({
                id: '1139624368u',
                name: 'tech.desusai.msappcentertesting.MainActivity$1.onClick (MainActivity.java:25)',
                reason: 'java.lang.ArithmeticException: divide by zero',
                file_name: null,
                line_number: null,
                url: 'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/crashes/errors/1139624368u',
                app_display_name: 'MSAppCenterTesting',
                app_platform: 'Java',
                app_version: '1.0(1)',
                stack_trace: [
                  'tech.desusai.msappcentertesting.MainActivity$1.onClick (MainActivity.java:25);',
                ],
                affected_users: 0,
                crash_count: 0,
                sent_at: '2021-03-02T18:14:33.9713246Z',
                app_id: 'ce8b5280-4605-4c1c-8c48-bd54c8fdda31',
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
                  anonymousId: '97fcd7b2-cc24-47d7-b776-057b7b199513',
                  context: {
                    library: { name: 'unknown', version: 'unknown' },
                    integration: { name: 'APPCENTER' },
                    app: { name: 'MSAppCenterTesting', version: '1.0(1)' },
                  },
                  integrations: { APPCENTER: false },
                  properties: {
                    id: '1139624368u',
                    name: 'tech.desusai.msappcentertesting.MainActivity$1.onClick (MainActivity.java:25)',
                    reason: 'java.lang.ArithmeticException: divide by zero',
                    file_name: null,
                    line_number: null,
                    url: 'https://appcenter.ms/users/venkat-rudderstack.com/apps/MSAppCenterTesting/crashes/errors/1139624368u',
                    app_display_name: 'MSAppCenterTesting',
                    app_platform: 'Java',
                    app_version: '1.0(1)',
                    stack_trace: [
                      'tech.desusai.msappcentertesting.MainActivity$1.onClick (MainActivity.java:25);',
                    ],
                    affected_users: 0,
                    crash_count: 0,
                    sent_at: '2021-03-02T18:14:33.9713246Z',
                    app_id: 'ce8b5280-4605-4c1c-8c48-bd54c8fdda31',
                  },
                  type: 'track',
                  event: 'App Crashed',
                  sentAt: '2021-03-02T18:14:33.9713246Z',
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
    jest.spyOn(utils, 'generateUUID').mockReturnValueOnce('97fcd7b2-cc24-47d7-b776-057b7b199513');
  },
}));
