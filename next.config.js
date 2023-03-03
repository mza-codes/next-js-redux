/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: false,
    images: {
        domains: ["image.tmdb.org", "cdn.arabsstock.com", "picsum.photos"],
    },
    experimental: {
        appDir: true,
    },
};
