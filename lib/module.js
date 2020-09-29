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
    context: this.options.srcDir,
    extensions: ['ts', 'js', 'vue'],
    cache: true,
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
      const EslintPlugin = require('eslint-webpack-plugin')

      config.plugins.push(new EslintPlugin(options))
    }
  })
}

module.exports.meta = require('../package.json')
