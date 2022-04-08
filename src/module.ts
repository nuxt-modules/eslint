import { resolve } from 'path'
import consola from 'consola'
import { defu } from 'defu'
import type { Module } from '@nuxt/types'
import type { Options } from 'eslint-webpack-plugin'
import { name, version } from '../package.json'
import { moduleExists } from './utils'

const logger = consola.withTag('nuxt:eslint')

export interface ModuleOptions extends Partial<Options>{}

const CONFIG_KEY = 'eslint'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  if (!this.options.dev) {
    return
  }

  const DEFAULTS: ModuleOptions = {
    context: this.options.srcDir,
    eslintPath: 'eslint',
    extensions: ['js', 'ts', 'vue'],
    cache: true,
    lintDirtyModulesOnly: true
  }

  const options: ModuleOptions = defu(
    this.options[CONFIG_KEY],
    moduleOptions,
    DEFAULTS
  )

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
  this.options.watch.push(...filesToWatch.map(file => resolve(this.options.rootDir, file)))

  this.extendBuild((config, { isDev, isClient }) => {
    if (isDev && isClient) {
      const EslintPlugin = require('eslint-webpack-plugin')

      config.plugins.push(new EslintPlugin(options))
    }
  })
}

;(nuxtModule as any).meta = { name, version }

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
