import { defineNuxtModule, addVitePlugin, addWebpackPlugin, useLogger } from '@nuxt/kit'
import type { Options as VitePlugin } from 'vite-plugin-eslint'
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin'
import vitePluginEslint from 'vite-plugin-eslint'
import EslintWebpackPlugin from 'eslint-webpack-plugin'
import { relative } from 'pathe'
import { watch } from 'chokidar'
import { name, version } from '../package.json'

const logger = useLogger('nuxt:eslint')

export type ModuleOptions = VitePlugin & WebpackPlugin

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'eslint',
    compatibility: {
      bridge: true
    }
  },
  defaults: nuxt => ({
    cache: true,
    include: [`${nuxt.options.srcDir}/**/*.{js,jsx,ts,tsx,vue}`],
    exclude: ['**/node_modules/**', nuxt.options.buildDir],
    eslintPath: 'eslint',
    formatter: 'stylish',
    lintOnStart: true,
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: false
  }),
  setup (options, nuxt) {
    if (!nuxt.options.dev) {
      return
    }

    const configPaths = [
      '.eslintignore',
      '.eslintrc',
      '.eslintrc.js',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.json'
    ]

    if (nuxt.options.watch) {
      nuxt.options.watch.push(...configPaths.map(path => relative(nuxt.options.rootDir, path)))
    } else {
      const watcher = watch(configPaths, { depth: 0 }).on('change', (path: string) => {
        logger.info(`Eslint config changed: ${path}`)
        logger.warn('Please restart the Nuxt server to apply changes or upgrade to latest Nuxt for automatic restart.')
      })
      nuxt.hook('close', () => watcher.close())
    }

    addVitePlugin(vitePluginEslint(options), { server: false })

    const webpackOptions = {
      ...options,
      context: nuxt.options.srcDir,
      files: options.include,
      lintDirtyModulesOnly: !options.lintOnStart
    }

    delete webpackOptions.include
    delete webpackOptions.lintOnStart

    addWebpackPlugin(new EslintWebpackPlugin(webpackOptions), { server: false })
  }
})
