import { secretFailedApiToken, secretApiToken } from './maskedSecrets';

export const networkCallsData = [
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: 'authToken',
      },
    },
    httpRes: {
      data: {
        data: {
          boards: [
            {
              name: 'Planning',
              columns: [
                {
                  id: 'name',
                  title: 'Name',
                  type: 'name',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'subitems',
                  title: 'Subitems',
                  type: 'subtasks',
                  description: null,
                  settings_str: JSON.stringify({
                    allowMultipleItems: true,
                    itemTypeName: 'column.subtasks.title',
                    displayType: 'BOARD_INLINE',
                    boardIds: [3160974974],
                  }),
                },
                {
                  id: 'person',
                  title: 'Person',
                  type: 'multiple-person',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'status',
                  title: 'Status',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_positions_v2: { '0': 0, '1': 2, '2': 1, '5': 3 },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'date4',
                  title: 'Date',
                  type: 'date',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'checkbox',
                  title: 'Checkbox',
                  type: 'boolean',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'connect_boards',
                  title: 'Connect boards',
                  type: 'board-relation',
                  description: null,
                  settings_str: JSON.stringify({ allowCreateReflectionColumn: false }),
                },
                {
                  id: 'status_1',
                  title: 'Other',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'date_1',
                  title: 'Date 1',
                  type: 'date',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'status_12',
                  title: 'new status',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'numbers',
                  title: 'Numbers',
                  type: 'numeric',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'text',
                  title: 'Name',
                  type: 'text',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'country',
                  title: 'Country',
                  type: 'country',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'dropdown',
                  title: 'Dropdown',
                  type: 'dropdown',
                  description: null,
                  settings_str: JSON.stringify({
                    hide_footer: false,
                    labels: [
                      { id: 1, name: 'dropdown' },
                      { id: 2, name: 'dropup' },
                    ],
                  }),
                },
                {
                  id: 'email',
                  title: 'Email',
                  type: 'email',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'location',
                  title: 'Location',
                  type: 'location',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'phone',
                  title: 'Phone',
                  type: 'phone',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'rating',
                  title: 'Rating',
                  type: 'rating',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'timeline',
                  title: 'Timeline',
                  type: 'timerange',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'dependent_on',
                  title: 'Dependent On',
                  type: 'dependency',
                  description:
                    'Choose the item your task will be dependent on. If the “dependent on” item’s date is changing, the other dates will adjust automatically',
                  settings_str: JSON.stringify({
                    boardIds: [3142482015],
                    dependencyNewInfra: true,
                    allowMultipleItems: true,
                  }),
                },
                {
                  id: 'long_text',
                  title: 'Long Text',
                  type: 'long-text',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'link',
                  title: 'Link',
                  type: 'link',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'tags',
                  title: 'Tags',
                  type: 'tag',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'label',
                  title: 'Label',
                  type: 'color',
                  description: '',
                  settings_str: JSON.stringify({
                    done_colors: [1],
                    labels: { '3': 'Label 2', '105': 'Label 1', '156': 'Label 3' },
                    labels_positions_v2: { '3': 1, '5': 3, '105': 0, '156': 2 },
                    labels_colors: {
                      '3': { color: '#0086c0', border: '#3DB0DF', var_name: 'blue-links' },
                      '105': { color: '#9AADBD', border: '#9AADBD', var_name: 'winter' },
                      '156': { color: '#9D99B9', border: '#9D99B9', var_name: 'purple_gray' },
                    },
                  }),
                },
                {
                  id: 'world_clock',
                  title: 'World Clock',
                  type: 'timezone',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'week',
                  title: 'Week',
                  type: 'week',
                  description: null,
                  settings_str: '{}',
                },
              ],
              groups: [
                {
                  id: 'topics',
                  title: 'This month',
                },
                {
                  id: 'group_title',
                  title: 'Next month',
                },
              ],
            },
          ],
        },
        account_id: 13215538,
      },
      status: 200,
    },
  },
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: 'errorAuth',
      },
    },
    httpRes: {
      data: {
        errors: [
          {
            message: "Field 'region' doesn't exist on type 'User'",
            locations: [
              {
                line: 322,
                column: 5,
              },
            ],
            fields: ['query', 'me', 'region'],
          },
        ],
        account_id: 123456789,
      },
      status: 200,
    },
  },
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: 'rateLimitAuthToken',
      },
    },
    httpRes: {
      data: {
        error_message: 'Rate Limit Exceeded.',
        status_code: 429,
      },
      status: 200,
    },
  },
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: 'internalServerAuthToken',
      },
    },
    httpRes: {
      data: {
        error_message: 'Internal server error',
        status_code: 500,
      },
      status: 500,
    },
  },
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: secretApiToken,
      },
    },
    httpRes: {
      data: {
        data: {
          boards: [
            {
              name: 'Planning',
              columns: [
                {
                  id: 'name',
                  title: 'Name',
                  type: 'name',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'subitems',
                  title: 'Subitems',
                  type: 'subtasks',
                  description: null,
                  settings_str: JSON.stringify({
                    allowMultipleItems: true,
                    itemTypeName: 'column.subtasks.title',
                    displayType: 'BOARD_INLINE',
                    boardIds: [3160974974],
                  }),
                },
                {
                  id: 'person',
                  title: 'Person',
                  type: 'multiple-person',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'status',
                  title: 'Status',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_positions_v2: { '0': 0, '1': 2, '2': 1, '5': 3 },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'date4',
                  title: 'Date',
                  type: 'date',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'checkbox',
                  title: 'Checkbox',
                  type: 'boolean',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'connect_boards',
                  title: 'Connect boards',
                  type: 'board-relation',
                  description: null,
                  settings_str: JSON.stringify({ allowCreateReflectionColumn: false }),
                },
                {
                  id: 'status_1',
                  title: 'Other',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'date_1',
                  title: 'Date 1',
                  type: 'date',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'status_12',
                  title: 'new status',
                  type: 'color',
                  description: null,
                  settings_str: JSON.stringify({
                    labels: { '0': 'Working on it', '1': 'Done', '2': 'Stuck' },
                    labels_colors: {
                      '0': { color: '#fdab3d', border: '#E99729', var_name: 'orange' },
                      '1': { color: '#00c875', border: '#00B461', var_name: 'green-shadow' },
                      '2': { color: '#e2445c', border: '#CE3048', var_name: 'red-shadow' },
                    },
                  }),
                },
                {
                  id: 'numbers',
                  title: 'Numbers',
                  type: 'numeric',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'text',
                  title: 'Name',
                  type: 'text',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'country',
                  title: 'Country',
                  type: 'country',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'dropdown',
                  title: 'Dropdown',
                  type: 'dropdown',
                  description: null,
                  settings_str: JSON.stringify({
                    hide_footer: false,
                    labels: [
                      { id: 1, name: 'dropdown' },
                      { id: 2, name: 'dropup' },
                    ],
                  }),
                },
                {
                  id: 'email',
                  title: 'Email',
                  type: 'email',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'location',
                  title: 'Location',
                  type: 'location',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'phone',
                  title: 'Phone',
                  type: 'phone',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'rating',
                  title: 'Rating',
                  type: 'rating',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'timeline',
                  title: 'Timeline',
                  type: 'timerange',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'dependent_on',
                  title: 'Dependent On',
                  type: 'dependency',
                  description:
                    'Choose the item your task will be dependent on. If the “dependent on” item’s date is changing, the other dates will adjust automatically',
                  settings_str: JSON.stringify({
                    boardIds: [3142482015],
                    dependencyNewInfra: true,
                    allowMultipleItems: true,
                  }),
                },
                {
                  id: 'long_text',
                  title: 'Long Text',
                  type: 'long-text',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'link',
                  title: 'Link',
                  type: 'link',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'tags',
                  title: 'Tags',
                  type: 'tag',
                  description: null,
                  settings_str: JSON.stringify({ hide_footer: false }),
                },
                {
                  id: 'label',
                  title: 'Label',
                  type: 'color',
                  description: '',
                  settings_str: JSON.stringify({
                    done_colors: [1],
                    labels: { '3': 'Label 2', '105': 'Label 1', '156': 'Label 3' },
                    labels_positions_v2: { '3': 1, '5': 3, '105': 0, '156': 2 },
                    labels_colors: {
                      '3': { color: '#0086c0', border: '#3DB0DF', var_name: 'blue-links' },
                      '105': { color: '#9AADBD', border: '#9AADBD', var_name: 'winter' },
                      '156': { color: '#9D99B9', border: '#9D99B9', var_name: 'purple_gray' },
                    },
                  }),
                },
                {
                  id: 'world_clock',
                  title: 'World Clock',
                  type: 'timezone',
                  description: null,
                  settings_str: '{}',
                },
                {
                  id: 'week',
                  title: 'Week',
                  type: 'week',
                  description: null,
                  settings_str: '{}',
                },
              ],
              groups: [
                {
                  id: 'topics',
                  title: 'This month',
                },
                {
                  id: 'group_title',
                  title: 'Next month',
                },
              ],
            },
          ],
        },
        account_id: 13215538,
      },
      status: 200,
    },
  },
  {
    httpReq: {
      url: 'https://api.monday.com/v2',
      method: 'POST',
      headers: {
        Authorization: secretFailedApiToken,
      },
    },
    httpRes: {
      data: {
        boards: [],
      },
      status: 200,
    },
  },
];
