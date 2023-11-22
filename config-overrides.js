// eslint-disable-next-line no-undef
module.exports = function override(config) {
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};
