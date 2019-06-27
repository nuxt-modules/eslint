const { resolve } = require('path')
const logger = require('./logger')
const { moduleExists } = require('./utils')

module.exports = function (moduleOptions) {
  if (!moduleExists('eslint')) {
    logger.warn(
      'The dependency `eslint` not found.',
      'Please run `yarn add eslint --dev` or `npm install eslint --save-dev`'
    )
    return
  }

  const options = {
    ...this.options.eslint,
    ...moduleOptions
  }

  const filesToWatch = [
    '.eslintrc',
    '.eslintrc.json',
    '.eslintrc.yaml',
    '.eslintrc.yml',
    '.eslintrc.js'
  ]

  this.options.watch.push(
    ...filesToWatch.map(file => resolve(this.options.rootDir, file))
  )

  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options
      })
    }
  })
}

module.exports.meta = require('../package.json')
