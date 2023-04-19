/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ["uz", "ru"],
    defaultLocale: "uz",
    localeDetection: false,
  },
};

module.exports = nextConfig;
