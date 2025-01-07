/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true
  },

  async redirects() {
    return [
      {
        source: '/values-and-mission',
        destination: '/',
        permanent: true
      },
      {
        source: '/kids-youth',
        destination: '/',
        permanent: true
      }
    ];
  }
};
