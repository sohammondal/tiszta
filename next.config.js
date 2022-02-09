/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack5: false,
    env: {
        ENV: process.env.ENV,
        HOST: process.env.HOST,
    },
}

module.exports = nextConfig
