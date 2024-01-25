const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    pageExtensions: ['mdx', 'tsx'],

    async redirects() {
        return [
            {
                source: '/values-and-mission',
                destination: '/about',
                permanent: true
            },
            {
                source: '/kids-youth',
                destination: '/ministries',
                permanent: true
            }
        ];
    }
};

module.exports = withMDX(nextConfig);
