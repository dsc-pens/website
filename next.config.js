require('dotenv').config()

const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')

const { API_KEY, AUTH_DOMAIN, GITHUB_TOKEN, MSG_SENDER_ID } = process.env

module.exports = withPlugins(
  [
    [require('@zeit/next-css')],
    [require('@zeit/next-sass')],
    [require('next-env')],
    [require('next-optimized-images')],
    [require('next-purgecss')],
  ],
  {
    /** @param {import('webpack').Configuration} config */
    webpack: config => {
      config.plugins.push(
        new webpack.EnvironmentPlugin({
          API_KEY,
          AUTH_DOMAIN,
          GITHUB_TOKEN,
          MSG_SENDER_ID,
        })
      )
      return config
    },
  }
)
