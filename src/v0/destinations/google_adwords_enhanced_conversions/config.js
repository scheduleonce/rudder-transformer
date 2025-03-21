const { getMappingConfig } = require('../../util');

const API_VERSION = 'v18';

const BASE_ENDPOINT = `https://googleads.googleapis.com/${API_VERSION}/customers`;

const CONFIG_CATEGORIES = {
  TRACK_CONFIG: { type: 'track', name: 'trackConfig' },
};

const CONVERSION_ACTION_ID_CACHE_TTL = process.env.CONVERSION_ACTION_ID_CACHE_TTL
  ? parseInt(process.env.CONVERSION_ACTION_ID_CACHE_TTL, 10)
  : 24 * 60 * 60;
const hashAttributes = ['email', 'phone', 'firstName', 'lastName', 'streetAddress'];
const MAPPING_CONFIG = getMappingConfig(CONFIG_CATEGORIES, __dirname);
module.exports = {
  trackMapping: MAPPING_CONFIG[CONFIG_CATEGORIES.TRACK_CONFIG.name],
  BASE_ENDPOINT,
  hashAttributes,
  CONVERSION_ACTION_ID_CACHE_TTL,
  destType: 'google_adwords_enhanced_conversions',
  API_VERSION,
};
