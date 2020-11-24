module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pop`,
        path: `${__dirname}/content/pop`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `stronglytyped`,
        path: `${__dirname}/content/stronglytyped-com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `arsy`,
        path: `${__dirname}/content/arsy-org`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/pop`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/content/arsy-org`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        defaultLayouts: {
          pop: require.resolve("./src/components/article.js"),
          default: require.resolve("./src/components/layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `crexq1ee1bv1`,
        accessToken: `EKx2e6RGeyW2yoXShJtnnaoCR5ycoVOBo-1eKhdY9tY`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `efk9h53zp18y`,
        accessToken: `oN6dU6shJY8PCDmJP7saW3d5IMEeLwXALlCuWITBspg`,
      },
    },
    {
      resolve: `gatsby-remark-images-contentful`,
      options: {
        // It's important to specify the maxWidth (in pixels) of
        // the content container as this plugin uses this as the
        // base for generating different widths of each image.
        maxWidth: 590,
      },
    },
    `@contentful/gatsby-transformer-contentful-richtext`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
