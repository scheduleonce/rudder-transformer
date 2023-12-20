export const data = [
    {
        name: 'marketo',
        description: 'Test 0',
        feature: 'router',
        module: 'destination',
        version: 'v0',
        input: {
            request: {
                body: {
                    input: [
                        {
                            "message": {
                                "anonymousId": "anon_id_success",
                                "channel": "mobile",
                                "context": {
                                    "app": {
                                        "build": "1",
                                        "name": "TestAppName",
                                        "namespace": "com.android.sample",
                                        "version": "1.0"
                                    },
                                    "device": {
                                        "id": "anon_id_success",
                                        "manufacturer": "Google",
                                        "model": "Android SDK built for x86",
                                        "name": "generic_x86",
                                        "type": "android"
                                    },
                                    "library": {
                                        "name": "com.rudderstack.android.sdk.core",
                                        "version": "1.0.1-beta.1"
                                    },
                                    "locale": "en-US",
                                    "network": {
                                        "carrier": "Android",
                                        "bluetooth": false,
                                        "cellular": true,
                                        "wifi": true
                                    },
                                    "os": {
                                        "name": "Android",
                                        "version": "8.1.0"
                                    },
                                    "screen": {
                                        "density": 420,
                                        "height": 1794,
                                        "width": 1080
                                    },
                                    "timezone": "Asia/Kolkata",
                                    "traits": {
                                        "anonymousId": "anon_id_success"
                                    },
                                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 8.1.0; Android SDK built for x86 Build/OSM1.180201.007)"
                                },
                                "event": "Product Clicked",
                                "integrations": {
                                    "All": true
                                },
                                "messageId": "id1",
                                "properties": {
                                    "name": "Test Product"
                                },
                                "originalTimestamp": "2020-12-17T21:00:59.176Z",
                                "type": "track",
                                "sentAt": "2020-03-12T09:05:03.421Z"
                            },
                            "metadata": {
                                "jobId": 1
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmLd",
                                "deleted": false,
                                "createdAt": "2020-12-30T08:39:32.005Z",
                                "updatedAt": "2021-02-03T16:22:31.374Z",
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        },
                        {
                            "message": {
                                "anonymousId": "anon_id_success",
                                "channel": "mobile",
                                "context": {
                                    "app": {
                                        "build": "1",
                                        "name": "TestAppName",
                                        "namespace": "com.android.sample",
                                        "version": "1.0"
                                    },
                                    "device": {
                                        "id": "anon_id_success",
                                        "manufacturer": "Google",
                                        "model": "Android SDK built for x86",
                                        "name": "generic_x86",
                                        "type": "android"
                                    },
                                    "library": {
                                        "name": "com.rudderstack.android.sdk.core",
                                        "version": "1.0.1-beta.1"
                                    },
                                    "locale": "en-US",
                                    "network": {
                                        "carrier": "Android",
                                        "bluetooth": false,
                                        "cellular": true,
                                        "wifi": true
                                    },
                                    "os": {
                                        "name": "Android",
                                        "version": "8.1.0"
                                    },
                                    "screen": {
                                        "density": 420,
                                        "height": 1794,
                                        "width": 1080
                                    },
                                    "timezone": "Asia/Kolkata",
                                    "traits": {
                                        "anonymousId": "anon_id_success"
                                    },
                                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 8.1.0; Android SDK built for x86 Build/OSM1.180201.007)"
                                },
                                "event": "Product Clicked",
                                "integrations": {
                                    "All": true
                                },
                                "messageId": "id1",
                                "properties": {
                                    "name": "Test Product",
                                    "product_id": "prod_1"
                                },
                                "originalTimestamp": "2020-12-17T21:00:59.176Z",
                                "type": "track",
                                "sentAt": "2020-12-17T21:00:59.176Z"
                            },
                            "metadata": {
                                "jobId": 2
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmLd",
                                "deleted": false,
                                "createdAt": "2020-12-30T08:39:32.005Z",
                                "updatedAt": "2021-02-03T16:22:31.374Z",
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        },
                        {
                            "message": {
                                "type": "identify",
                                "sentAt": "2022-09-19T10:34:02.002Z",
                                "userId": "e17c5a5e-5e2f-430b-b497-fe3f1ea3a704",
                                "channel": "web",
                                "context": {
                                    "os": {
                                        "name": "",
                                        "version": ""
                                    },
                                    "app": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "build": "1.0.0",
                                        "version": "2.12.1",
                                        "namespace": "com.rudderlabs.javascript"
                                    },
                                    "page": {
                                        "url": "https://accounts.app.t2.broken.com/home",
                                        "path": "/home",
                                        "title": "Home",
                                        "search": "",
                                        "tab_url": "https://accounts.app.t2.broken.com/home",
                                        "referrer": "https://ts50-cvii.core.broken.org/",
                                        "initial_referrer": "https://ts50-cvii.core.broken.org/",
                                        "referring_domain": "ts50-cvii.core.broken.org",
                                        "initial_referring_domain": "ts50-cvii.core.broken.org"
                                    },
                                    "locale": "en-IN",
                                    "screen": {
                                        "width": 1728,
                                        "height": 1117,
                                        "density": 2,
                                        "innerWidth": 1728,
                                        "innerHeight": 969
                                    },
                                    "traits": {
                                        "name": "AM",
                                        "email": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040@j.mail",
                                        "lastName": "M",
                                        "firstName": "A",
                                        "accountName": "MACDEV",
                                        "billingName": "g g",
                                        "companyName": "macDev",
                                        "currentTier": "Webinar Pro 250",
                                        "billingCycle": "Annually",
                                        "lastBillingDate": "2022-06-29T09:40:42.000Z",
                                        "nextBillingDate": "2023-09-09T04:00:00.000Z",
                                        "subscriptionType": "Webinar Pro 250",
                                        "subscriptionStatus": "ACTIVE",
                                        "lastWebinarEventDate": "2022-09-15T20:00:00.000Z",
                                        "nextWebinarEventDate": "2022-09-16T06:15:00.000Z"
                                    },
                                    "library": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "version": "2.12.1"
                                    },
                                    "campaign": {},
                                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
                                },
                                "rudderId": "73dc83ef-587f-4077-90f3-c36083e64019",
                                "messageId": "1663583642000200-e3f31c4c-6361-4f99-b643-7755303a6007",
                                "timestamp": "2022-09-19T10:34:02.954Z",
                                "receivedAt": "2022-09-19T10:34:02.956Z",
                                "request_ip": "11.105.44.120",
                                "anonymousId": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040",
                                "integrations": {
                                    "All": true
                                },
                                "originalTimestamp": "2022-09-19T10:34:02.000Z"
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "valid_account_broken_event",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            },
                            "metadata": {
                                "jobId": 3
                            }
                        },
                        {
                            "message": {
                                "type": "identify",
                                "sentAt": "2022-09-19T10:34:02.002Z",
                                "userId": "e17c5a5e-5e2f-430b-b497-fe3f1ea3a704",
                                "channel": "web",
                                "context": {
                                    "os": {
                                        "name": "",
                                        "version": ""
                                    },
                                    "app": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "build": "1.0.0",
                                        "version": "2.12.1",
                                        "namespace": "com.rudderlabs.javascript"
                                    },
                                    "page": {
                                        "url": "https://accounts.app.t2.broken.com/home",
                                        "path": "/home",
                                        "title": "Home",
                                        "search": "",
                                        "tab_url": "https://accounts.app.t2.broken.com/home",
                                        "referrer": "https://ts50-cvii.core.broken.org/",
                                        "initial_referrer": "https://ts50-cvii.core.broken.org/",
                                        "referring_domain": "ts50-cvii.core.broken.org",
                                        "initial_referring_domain": "ts50-cvii.core.broken.org"
                                    },
                                    "locale": "en-IN",
                                    "screen": {
                                        "width": 1728,
                                        "height": 1117,
                                        "density": 2,
                                        "innerWidth": 1728,
                                        "innerHeight": 969
                                    },
                                    "traits": {
                                        "name": "AM",
                                        "email": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040@j.mail",
                                        "lastName": "M",
                                        "firstName": "A",
                                        "accountName": "MACDEV",
                                        "billingName": "g g",
                                        "companyName": "macDev",
                                        "currentTier": "Webinar Pro 250",
                                        "billingCycle": "Annually",
                                        "lastBillingDate": "2022-06-29T09:40:42.000Z",
                                        "nextBillingDate": "2023-09-09T04:00:00.000Z",
                                        "subscriptionType": "Webinar Pro 250",
                                        "subscriptionStatus": "ACTIVE",
                                        "lastWebinarEventDate": "2022-09-15T20:00:00.000Z",
                                        "nextWebinarEventDate": "2022-09-16T06:15:00.000Z"
                                    },
                                    "library": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "version": "2.12.1"
                                    },
                                    "campaign": {},
                                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
                                },
                                "rudderId": "73dc83ef-587f-4077-90f3-c36083e64019",
                                "messageId": "1663583642000200-e3f31c4c-6361-4f99-b643-7755303a6007",
                                "timestamp": "2022-09-19T10:34:02.954Z",
                                "receivedAt": "2022-09-19T10:34:02.956Z",
                                "request_ip": "11.105.44.120",
                                "anonymousId": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040",
                                "integrations": {
                                    "All": true
                                },
                                "originalTimestamp": "2022-09-19T10:34:02.000Z"
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "unhandled_status_code",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            },
                            "metadata": {
                                "jobId": 4
                            }
                        },
                        {
                            "message": {
                                "type": "identify",
                                "sentAt": "2022-09-19T10:34:02.002Z",
                                "userId": "e17c5a5e-5e2f-430b-b497-fe3f1ea3a704",
                                "channel": "web",
                                "context": {
                                    "os": {
                                        "name": "",
                                        "version": ""
                                    },
                                    "app": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "build": "1.0.0",
                                        "version": "2.12.1",
                                        "namespace": "com.rudderlabs.javascript"
                                    },
                                    "page": {
                                        "url": "https://accounts.app.t2.broken.com/home",
                                        "path": "/home",
                                        "title": "Home",
                                        "search": "",
                                        "tab_url": "https://accounts.app.t2.broken.com/home",
                                        "referrer": "https://ts50-cvii.core.broken.org/",
                                        "initial_referrer": "https://ts50-cvii.core.broken.org/",
                                        "referring_domain": "ts50-cvii.core.broken.org",
                                        "initial_referring_domain": "ts50-cvii.core.broken.org"
                                    },
                                    "locale": "en-IN",
                                    "screen": {
                                        "width": 1728,
                                        "height": 1117,
                                        "density": 2,
                                        "innerWidth": 1728,
                                        "innerHeight": 969
                                    },
                                    "traits": {
                                        "name": "AM",
                                        "email": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040@j.mail",
                                        "lastName": "M",
                                        "firstName": "A",
                                        "accountName": "MACDEV",
                                        "billingName": "g g",
                                        "companyName": "macDev",
                                        "currentTier": "Webinar Pro 250",
                                        "billingCycle": "Annually",
                                        "lastBillingDate": "2022-06-29T09:40:42.000Z",
                                        "nextBillingDate": "2023-09-09T04:00:00.000Z",
                                        "subscriptionType": "Webinar Pro 250",
                                        "subscriptionStatus": "ACTIVE",
                                        "lastWebinarEventDate": "2022-09-15T20:00:00.000Z",
                                        "nextWebinarEventDate": "2022-09-16T06:15:00.000Z"
                                    },
                                    "library": {
                                        "name": "RudderLabs JavaScript SDK",
                                        "version": "2.12.1"
                                    },
                                    "campaign": {},
                                    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
                                },
                                "rudderId": "73dc83ef-587f-4077-90f3-c36083e64019",
                                "messageId": "1663583642000200-e3f31c4c-6361-4f99-b643-7755303a6007",
                                "timestamp": "2022-09-19T10:34:02.954Z",
                                "receivedAt": "2022-09-19T10:34:02.956Z",
                                "request_ip": "11.105.44.120",
                                "anonymousId": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040",
                                "integrations": {
                                    "All": true
                                },
                                "originalTimestamp": "2022-09-19T10:34:02.000Z"
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "successful_identify_transformation",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            },
                            "metadata": {
                                "jobId": 5
                            }
                        }
                    ],
                    destType: 'marketo',
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
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "POST",
                                "endpoint": "https://marketo_acct_id_success.mktorest.com/rest/v1/activities/external.json",
                                "headers": {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer access_token_success"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "input": [
                                            {
                                                "activityDate": "2020-12-17T21:00:59.176Z",
                                                "activityTypeId": 100001,
                                                "attributes": [],
                                                "leadId": 4,
                                                "primaryAttributeValue": "Test Product"
                                            }
                                        ]
                                    },
                                    "XML": {},
                                    "JSON_ARRAY": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                {
                                    "destInfo": {
                                        "authKey": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                    },
                                    "jobId": 1
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmLd",
                                "deleted": false,
                                "createdAt": "2020-12-30T08:39:32.005Z",
                                "updatedAt": "2021-02-03T16:22:31.374Z",
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        },
                        {
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "POST",
                                "endpoint": "https://marketo_acct_id_success.mktorest.com/rest/v1/activities/external.json",
                                "headers": {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer access_token_success"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "input": [
                                            {
                                                "activityDate": "2020-12-17T21:00:59.176Z",
                                                "activityTypeId": 100001,
                                                "attributes": [],
                                                "leadId": 4,
                                                "primaryAttributeValue": "Test Product"
                                            }
                                        ]
                                    },
                                    "XML": {},
                                    "JSON_ARRAY": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                {
                                    "destInfo": {
                                        "authKey": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                    },
                                    "jobId": 2
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmLd",
                                "deleted": false,
                                "createdAt": "2020-12-30T08:39:32.005Z",
                                "updatedAt": "2021-02-03T16:22:31.374Z",
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        },
                        {
                            "batched": false,
                            "statusCode": 400,
                            "error": "{\"message\":\"Request Failed for marketo, Lookup field 'userId' not found (Aborted).[Marketo Transformer]: During lead look up using email\",\"destinationResponse\":{\"response\":{\"requestId\":\"142e4#1835b117b76\",\"success\":false,\"errors\":[{\"code\":\"1006\",\"message\":\"Lookup field 'userId' not found\"}]},\"status\":200}}",
                            "statTags": {
                                "errorCategory": "network",
                                "errorType": "aborted"
                            },
                            "metadata": [
                                {
                                    "destInfo": {
                                        "authKey": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                    },
                                    "jobId": 3
                                }
                            ],
                            "destination": {
                                "Config": {
                                    "accountId": "valid_account_broken_event",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        },
                        {
                            "batched": false,
                            "statusCode": 400,
                            "error": "{\"message\":\"Error occurred [Marketo Transformer]: During lead look up using email -> some other problem\",\"destinationResponse\":{\"response\":{\"requestId\":\"142e4#1835b117b76\",\"success\":false,\"errors\":[{\"code\":\"random_marketo_code\",\"message\":\"some other problem\"}]},\"status\":200}}",
                            "statTags": {
                                "errorCategory": "network",
                                "errorType": "aborted",
                                "meta": "unhandledStatusCode"
                            },
                            "destination": {
                                "Config": {
                                    "accountId": "unhandled_status_code",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            },
                            "metadata": [
                                {
                                    "destInfo": {
                                        "authKey": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                    },
                                    "jobId": 4
                                }
                            ]
                        },
                        {
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "POST",
                                "endpoint": "https://successful_identify_transformation.mktorest.com/rest/v1/leads.json",
                                "headers": {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer access_token_success"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "action": "createOrUpdate",
                                        "input": [
                                            {
                                                "Email": "0c7b8b80-9c43-4f8e-b2d2-5e2448a25040@j.mail",
                                                "FirstName": "A",
                                                "LastName": "M",
                                                "id": 4,
                                                "userId": "e17c5a5e-5e2f-430b-b497-fe3f1ea3a704"
                                            }
                                        ],
                                        "lookupField": "id"
                                    },
                                    "XML": {},
                                    "JSON_ARRAY": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                {
                                    "destInfo": {
                                        "authKey": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                    },
                                    "jobId": 5
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "Config": {
                                    "accountId": "successful_identify_transformation",
                                    "clientId": "504300cd-76b2-a7l4-bhle-90a07420nx73",
                                    "clientSecret": "3l3gJpzRsZagD6gu7tnTeKXz0bomLGnd",
                                    "trackAnonymousEvents": false,
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "acq_signup_completed",
                                            "marketoActivityId": "100026"
                                        },
                                        {
                                            "event": "act_createwebinarform_submit",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_style",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_view",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_webinar_join",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_presentation_addteammember",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_discussions_savediscussion",
                                            "marketoActivityId": "100025"
                                        },
                                        {
                                            "event": "act_engagement_networking_savetime",
                                            "marketoActivityId": "100025"
                                        }
                                    ]
                                },
                                "destinationDefinition": {
                                    "config": {
                                        "destConfig": {
                                            "defaultConfig": [
                                                "accountId",
                                                "clientId",
                                                "clientSecret",
                                                "trackAnonymousEvents",
                                                "rudderEventsMapping",
                                                "customActivityPropertyMap",
                                                "leadTraitMapping"
                                            ]
                                        },
                                        "secretKeys": [
                                            "clientSecret"
                                        ],
                                        "excludeKeys": [],
                                        "includeKeys": [],
                                        "routerTransform": true,
                                        "supportedSourceTypes": [
                                            "android",
                                            "ios",
                                            "web",
                                            "unity",
                                            "amp",
                                            "cloud",
                                            "reactnative"
                                        ]
                                    },
                                    "responseRules": {
                                        "responseType": "JSON",
                                        "rules": {
                                            "retryable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 600
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 601
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 602
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 604
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 606
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 607
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 608
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 611
                                                }
                                            ],
                                            "abortable": [
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 603
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 605
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 609
                                                },
                                                {
                                                    "success": "false",
                                                    "errors.0.code": 610
                                                }
                                            ]
                                        }
                                    },
                                    "id": "1aIXqM806xAVm92nx07YwKbRrO9",
                                    "name": "MARKETO",
                                    "displayName": "Marketo",
                                    "createdAt": "2020-04-09T09:24:31.794Z",
                                    "updatedAt": "2021-01-11T11:03:28.103Z"
                                },
                                "secretConfig": {},
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVke",
                                "name": "Marketo",
                                "enabled": true,
                                "workspaceId": "1TSN08muJTZwH8iCDmnnRt1pmMd",
                                "deleted": false,
                                "createdAt": "2022-02-10T08:39:32.005Z",
                                "updatedAt": "2022-09-03T16:22:31.374Z",
                                "transformations": [],
                                "isConnectionEnabled": true,
                                "isProcessorEnabled": true
                            }
                        }
                    ],
                },
            },
        },
    },
    {
        name: 'marketo',
        description: 'processMetadataForRouter function specific test',
        feature: 'router',
        module: 'destination',
        version: 'v0',
        input: {
            request: {
                body: {
                    input: [
                        {
                            "message": {
                                "anonymousId": "anon_id_success",
                                "channel": "mobile",
                                "context": {
                                    "app": {
                                        "build": "1",
                                        "name": "TestAppName",
                                        "namespace": "com.android.sample",
                                        "version": "1.0"
                                    },
                                    "device": {
                                        "id": "anon_id_success",
                                        "manufacturer": "Google",
                                        "model": "Android SDK built for x86",
                                        "name": "generic_x86",
                                        "type": "android"
                                    },
                                    "library": {
                                        "name": "com.rudderstack.android.sdk.core",
                                        "version": "1.0.1-beta.1"
                                    },
                                    "locale": "en-US",
                                    "network": {
                                        "carrier": "Android",
                                        "bluetooth": false,
                                        "cellular": true,
                                        "wifi": true
                                    },
                                    "os": {
                                        "name": "Android",
                                        "version": "8.1.0"
                                    },
                                    "screen": {
                                        "density": 420,
                                        "height": 1794,
                                        "width": 1080
                                    },
                                    "timezone": "Asia/Kolkata",
                                    "traits": {
                                        "anonymousId": "anon_id_success"
                                    },
                                    "userAgent": "Dalvik/2.1.0 (Linux; U; Android 8.1.0; Android SDK built for x86 Build/OSM1.180201.007)"
                                },
                                "event": "Product Clicked",
                                "integrations": {
                                    "All": true
                                },
                                "messageId": "id1",
                                "properties": {
                                    "name": "Test Product",
                                    "product_id": "prod_1"
                                },
                                "originalTimestamp": "2020-12-17T21:00:59.176Z",
                                "type": "track",
                                "sentAt": "2020-12-17T21:00:59.176Z"
                            },
                            "destination": {
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        },
                                        {
                                            "from": "product_id",
                                            "to": "productId"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                }
                            },
                            "metadata": [
                                {
                                    "jobId": 1
                                },
                                {
                                    "jobId": 1
                                },
                                {
                                    "jobId": 1
                                }
                            ],
                            "batched": false,
                            "statusCode": 200,
                        }
                    ],
                    destType: 'marketo',
                },
                method: 'POST',
            },
        },
        output: {
            response: {
                status: 200,
                body: {
                    "output": [
                        {
                            "batchedRequest": {
                                "version": "1",
                                "type": "REST",
                                "method": "POST",
                                "endpoint": "https://marketo_acct_id_success.mktorest.com/rest/v1/activities/external.json",
                                "headers": {
                                    "Authorization": "Bearer access_token_success",
                                    "Content-Type": "application/json"
                                },
                                "params": {},
                                "body": {
                                    "JSON": {
                                        "input": [
                                            {
                                                "activityDate": "2020-12-17T21:00:59.176Z",
                                                "activityTypeId": 100001,
                                                "attributes": [
                                                    {
                                                        "name": "productId",
                                                        "value": "prod_1"
                                                    }
                                                ],
                                                "leadId": 4,
                                                "primaryAttributeValue": "Test Product"
                                            }
                                        ]
                                    },
                                    "JSON_ARRAY": {},
                                    "XML": {},
                                    "FORM": {}
                                },
                                "files": {}
                            },
                            "metadata": [
                                [
                                    {
                                        "jobId": 1
                                    },
                                    {
                                        "jobId": 1
                                    },
                                    {
                                        "jobId": 1
                                    }
                                ]
                            ],
                            "batched": false,
                            "statusCode": 200,
                            "destination": {
                                "ID": "1mMy5cqbtfuaKZv1IhVQKnBdVwe",
                                "Config": {
                                    "accountId": "marketo_acct_id_success",
                                    "clientId": "marketo_client_id_success",
                                    "clientSecret": "marketo_client_secret_success",
                                    "trackAnonymousEvents": true,
                                    "customActivityPropertyMap": [
                                        {
                                            "from": "name",
                                            "to": "productName"
                                        },
                                        {
                                            "from": "product_id",
                                            "to": "productId"
                                        }
                                    ],
                                    "leadTraitMapping": [
                                        {
                                            "from": "leadScore",
                                            "to": "customLeadScore"
                                        }
                                    ],
                                    "createIfNotExist": true,
                                    "rudderEventsMapping": [
                                        {
                                            "event": "Product Clicked",
                                            "marketoPrimarykey": "name",
                                            "marketoActivityId": "100001"
                                        }
                                    ]
                                }
                            }
                        }
                    ],
                },
            },
        },
    }
];