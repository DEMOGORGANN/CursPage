/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // issure:{
      //   test:/\.(js|ts)x?$/,
      // },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
