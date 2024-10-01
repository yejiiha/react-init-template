const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  eslint: {
    enable: true,
    mode: 'file',
  },
};