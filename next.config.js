const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");

const nextConfig = {
	env: {
		GMAPS_API_KEY: process.env.GMAPS_API_KEY,
		AWS_USER_KEY_ID: process.env.AWS_USER_KEY_ID,
		AWS_USER_SECRET: process.env.AWS_USER_SECRET,
		XRDS_SANITY: process.env.XRDS_SANITY
	},
	webpack: (config, options) => {
		// Modify the `config` here

		return config;
	}
};

module.exports = withPlugins([withFonts, [withImages, { ignoreTypes: ["svg"] }]], nextConfig);
