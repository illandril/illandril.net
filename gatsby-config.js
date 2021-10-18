module.exports = {
    siteMetadata: {
        siteUrl: 'https://joe.spandrusyszyn.com',
        title: "Joe Spandrusyszyn's Portfolio",
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-provide-react',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-preconnect',
            options: {
                domains: [{ domain: 'https://fonts.gstatic.com', crossOrigin: true }],
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /node_modules\/@fortawesome\/fontawesome-free\/svgs\//,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['roboto'],
                display: 'swap',
            },
        },
        {
            resolve: 'gatsby-plugin-no-javascript-utils',
            options: {
                noScript: true,
                noSourcemaps: true,
                removeGeneratorTag: true,
                removeReactHelmetAttrs: true,
                noInlineStyles: true,
                removeGatsbyAnnouncer: true,
            },
        },
    ],
    polyfill: false,
};
