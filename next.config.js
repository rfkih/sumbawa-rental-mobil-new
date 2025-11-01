/** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ["cdn.imagin.studio"]
//     }
// }

// module.exports = nextConfig

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

