/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        silenceDeprecations: ['import', 'legacy-js-api', 'global-builtin', 'color-functions', 'if-function'],
    },
};

export default nextConfig;
