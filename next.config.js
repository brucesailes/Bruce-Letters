// next.config.js

module.exports = {
  images: {
    // Define remote patterns for images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

