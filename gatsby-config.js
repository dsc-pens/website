require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const title = 'DSC PENS'
const colorHex = '#4286f4'

module.exports = {
  siteMetadata: {
    title,
    siteUrl: 'https://dsc-pens.firebaseapp.com',
    description: 'A Google Developer Student Club division from PENS',
  },
  plugins: [
    'gatsby-plugin-offline',
    'gatsby-plugin-purgecss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-jsx',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layouts/AppLayout`),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: title,
        short_name: title,
        start_url: '/',
        background_color: colorHex,
        theme_color: colorHex,
        display: 'minimal-ui',
        icon: './src/static/dsc-icon.webp',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'static',
        path: `${__dirname}/src/static`,
      },
    },
  ],
}
