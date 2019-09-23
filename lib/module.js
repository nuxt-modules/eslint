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
    extensions: ['ts', 'js', 'vue'],
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

  this.extendBuild((config, { isDev, isClient }) => {
    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: RegExp(`\\.(${options.extensions.join('|')})$`),
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options
      })
    }
  })
}

module.exports.meta = require('../package.json')
