require("dotenv").config({ path: `.env` })

const isProd = process.env.NODE_ENV === "production"
const previewEnabled = (process.env.GATSBY_IS_PREVIEW || "false").toLowerCase() === "true"

module.exports = {
  siteMetadata: {
    title: `Iza Trzeciak`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: !isProd,
        overlayDrafts: !isProd || previewEnabled,
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: ``,
    //     short_name: ``,
    //     lang: `pl`,
    //     display: `standalone`,
    //     icon: `src/resources/images/logo.webp`,
    //     start_url: `/`,
    //     background_color: ``,
    //     theme_color: ``,
    //   },
    // },
  ]
};