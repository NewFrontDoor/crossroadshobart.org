// Next.config.js
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

const nextConfig = {
  env: {
    XRDS_SENDGRID: process.env.XRDS_SENDGRID,
    XRDS_SANITY: process.env.XRDS_SANITY,
    GOOGLE_MAPS_API: process.env.GOOGLE_MAPS_API
  },
  webpack: (config, options) => {
    // Modify the `config` here

    return config;
  }
};

module.exports = withPlugins(
  [withFonts, [withImages, {ignoreTypes: ['svg']}], withCSS],
  nextConfig
);
