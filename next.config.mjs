/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns: [
            {
                hostname:'*.googleusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'linktree-aman.s3.amazonaws.com',
            },
        ], 
    }
};

export default nextConfig;
