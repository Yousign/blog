module.exports = {
  images: {
    domains: ['ys-storage-public-blogtech-content-bucket.s3.eu-west-3.amazonaws.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
};
