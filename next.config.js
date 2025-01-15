/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => { if (!isServer) { config.resolve.fallback = { fs: false, net: false,async_hooks: false,async_hooks: false }; } return config; },
}

module.exports = nextConfig
