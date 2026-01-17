module.exports = {
    siteUrl: 'https://docs.datablit.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [
        '/*.png',
        '/*.jpg',
        '/*.jpeg',
        '/*.gif',
        '/*.svg',
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};
