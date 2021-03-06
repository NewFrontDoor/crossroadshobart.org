const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

const nextConfig = {
  webpack: (config, _options) => {
    // Modify the `config` here

    return config;
  }
};

module.exports = withPlugins(
  [withFonts, [withImages, {ignoreTypes: ['svg']}]],
  nextConfig
);
