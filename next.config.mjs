/** @type {import('next').NextConfig} */

export const BASE_PREFIX =
    process.env.NODE_ENV === 'production' ? '/DOCS_BASE_PATH' : undefined;

const nextConfig = {
    env: {
        NEXT_PUBLIC_BASE_PATH: BASE_PREFIX,
    },
};

export default nextConfig;
