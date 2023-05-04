const path = require('path');

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@flight-reservations': path.resolve(__dirname, 'src/'),
    },
  };

  return config;
};
