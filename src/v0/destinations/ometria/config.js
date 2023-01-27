const { getMappingConfig } = require('../../util');

const ENDPOINT = 'https://api.ometria.com/v2/push';
const CONFIG_CATEGORIES = {
  IDENTIFY: { type: 'identify', name: 'OmetriaContact' },
  CUSTOM_EVENT: { type: 'custom event', name: 'OmetriaCustomEvent' },
  ORDER: { type: 'order', name: 'OmetriaOrder' },
  LINEITEMS: { type: 'lineitems', name: 'OmetriaLineitems' },
  VARIANT: { type: 'variant', name: 'OmetriaVariant' },
};

const MAX_BATCH_SIZE = 100;
const MAPPING_CONFIG = getMappingConfig(CONFIG_CATEGORIES, __dirname);
const IDENTIFY_EXCLUSION_FIELDS = [
  'email',
  'phoneNumber',
  'phone',
  'collection',
  'marketinOptin',
  'userId',
  'anonymousId',
  'prefix',
  'name',
  'first_name',
  'firstName',
  'last_name',
  'lastName',
  'middle_name',
  'middleName',
  'firstName',
  'lastname',
  'middlename',
  'dateOfBirth',
  'birthday',
  'countryId',
  'timezone',
  'timestampAcquired',
  'createdAt',
  'timestampSubscribed',
  'timestampUnsubscribed',
  'channels',
  'storeIds',
  'gender',
  'removeFromLists',
  'addToLists',
  'marketingOptin',
  'custom_fields',
  'listingId',
  'forceOptin',
  'merge',
];

const CUSTOM_EVENT_EXCLUSION_FIELDS = [
  'event_id',
  'event_type',
  'timestamp',
  'profile_id',
  'email',
  'userId',
  'anonymousId',
  'custom_fields',
];

const ORDER_EXCLUSION_FIELDS = [
  'order_id',
  'timestamp',
  'grand_total',
  'subtotal',
  'discount',
  'shipping',
  'tax',
  'currency',
  'web_id',
  'status',
  'customer',
  'products',
  'ip_address',
  'channel',
  'store',
  'payment_method',
  'shipping_method',
  'shipping_address',
  'billing_address',
  'coupon_code',
  'custom_fields',
  'is_valid',
  'status',
];

const LINEITEMS_EXCLUSION_FIELDS = [
  'product_id',
  'variant_id',
  'quantity',
  'sku',
  'unit_price',
  'quantity_refunded',
  'refunded',
  'subtotal',
  'tax',
  'total',
  'discount',
  'is_on_sale',
  'totals',
  'properties',
  'variant_options',
];

const MARKETING_OPTIN_LIST = ['EXPLICITYLY_OPTEDOUT', 'NOT_SPECIFIED', 'EXPLICITLY_OPTEDIN'];

const ecomEvents = [
  'order completed',
  'order shipped',
  'order pending',
  'order complete',
  'pending',
  'complete',
  'shipped',
];

const eventNameMapping = {
  'order completed': 'complete',
  'order complete': 'complete',
  complete: 'complete',
  'order pending': 'pending',
  pending: 'pending',
  'order shipped': 'shipped',
  shipped: 'shipped',
};

const currencyList = [
  'AED',
  'AFN',
  'ALL',
  'AMD',
  'ANG',
  'AOA',
  'AUD',
  'AWG',
  'AZN',
  'BAM',
  'BBD',
  'BDT',
  'BGN',
  'BHD',
  'BIF',
  'BMD',
  'BND',
  'BOB',
  'BRL',
  'BSD',
  'BTN',
  'BWP',
  'BYR',
  'BZD',
  'CAD',
  'CDF',
  'CHF',
  'CLP',
  'CNY',
  'COP',
  'CRC',
  'CUC',
  'CUP',
  'CVE',
  'CZK',
  'DJF',
  'DKK',
  'DOP',
  'DZD',
  'EGP',
  'ERN',
  'ETB',
  'EUR',
  'FJD',
  'FKP',
  'GBP',
  'GEL',
  'GGP',
  'GHS',
  'GIP',
  'GMD',
  'GNF',
  'GTQ',
  'GYD',
  'HKD',
  'HNL',
  'HRK',
  'HTG',
  'HUF',
  'IDR',
  'ILS',
  'IMP',
  'INR',
  'IQD',
  'IRR',
  'ISK',
  'JEP',
  'JMD',
  'JOD',
  'JPY',
  'KES',
  'KGS',
  'KHR',
  'KMF',
  'KPW',
  'KRW',
  'KWD',
  'KYD',
  'KZT',
  'LAK',
  'LBP',
  'LKR',
  'LRD',
  'LSL',
  'LYD',
  'MAD',
  'MDL',
  'MGA',
  'MKD',
  'MMK',
  'MNT',
  'MOP',
  'MRO',
  'MUR',
  'MVR',
  'MWK',
  'MXN',
  'MYR',
  'MZN',
  'NAD',
  'NGN',
  'NIO',
  'NOK',
  'NPR',
  'NZD',
  'OMR',
  'PAB',
  'PEN',
  'PGK',
  'PHP',
  'PKR',
  'PLN',
  'PYG',
  'QAR',
  'RON',
  'RSD',
  'RUB',
  'RWF',
  'SAR',
  'SBD',
  'SCR',
  'SDG',
  'SEK',
  'SGD',
  'SHP',
  'SLL',
  'SOS',
  'SPL',
  'SRD',
  'STD',
  'SVC',
  'SYP',
  'SZL',
  'THB',
  'TJS',
  'TMT',
  'TND',
  'TOP',
  'TRY',
  'TTD',
  'TVD',
  'TWD',
  'TZS',
  'UAH',
  'UGX',
  'USD',
  'UYU',
  'UZS',
  'VEF',
  'VND',
  'VUV',
  'WST',
  'XAF',
  'XCD',
  'XDR',
  'XOF',
  'XPF',
  'YER',
  'ZAR',
  'ZMW',
  'ZWD',
];

module.exports = {
  ENDPOINT,
  ecomEvents,
  eventNameMapping,
  currencyList,
  MAX_BATCH_SIZE,
  IDENTIFY_EXCLUSION_FIELDS,
  CUSTOM_EVENT_EXCLUSION_FIELDS,
  MARKETING_OPTIN_LIST,
  ORDER_EXCLUSION_FIELDS,
  LINEITEMS_EXCLUSION_FIELDS,
  contactDataMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.IDENTIFY.name],
  customEventMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.CUSTOM_EVENT.name],
  orderMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.ORDER.name],
  lineitemsMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.LINEITEMS.name],
  variantMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.VARIANT.name],
};
