import remarkFrontmatter from 'remark-frontmatter';
import nextMDX from '@next/mdx';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

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

export default nextMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        rehypePlugins: []
        //providerImportSource: '@mdx-js/react'
    }
})(nextConfig);
