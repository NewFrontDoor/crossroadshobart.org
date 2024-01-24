const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['mdx', 'tsx']
};

module.exports = withMDX(nextConfig);
