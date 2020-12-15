const { resolve } = require('path')
const logger = require('./logger')
const { moduleExists } = require('./utils')

module.exports = function (moduleOptions) {
  const options = {
    context: this.options.srcDir,
    eslintPath: 'eslint',
    extensions: ['js', 'ts', 'vue'],
    cache: true,
    lintDirtyModulesOnly: true,
    ...this.options.eslint,
    ...moduleOptions
  }

  if (!moduleExists(options.eslintPath)) {
    logger.warn(
      `The dependency \`${options.eslintPath}\` not found.`,
      'Please run `yarn add eslint --dev` or `npm install eslint --save-dev`'
    )
    return
  }

  const filesToWatch = [
    '.eslintrc',
    '.eslintrc.json',
    '.eslintrc.yaml',
    '.eslintrc.yml',
    '.eslintrc.js'
  ]

  this.options.watch = this.options.watch || []
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
