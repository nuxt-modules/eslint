import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit'
import type { Options as VitePlugin } from 'vite-plugin-eslint'
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin'
import vitePluginEslint from 'vite-plugin-eslint'
import EslintWebpackPlugin from 'eslint-webpack-plugin'
import { name, version } from '../package.json'

export interface ModuleOptions {
  vite: VitePlugin,
  webpack: WebpackPlugin
}

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
    vite: {
      cache: true,
      failOnWarning: false,
      failOnError: false
    },
    webpack: {
      context: nuxt.options.srcDir,
      eslintPath: 'eslint',
      extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
      cache: true,
      lintDirtyModulesOnly: true
    }
  }),
  setup (options, nuxt) {
    if (!nuxt.options.dev) {
      return
    }

    /*
    TODO: add eslint config to watch
    nuxt.options.watch.push(await findPath([
      '.eslintrc',
      '.eslintrc.js',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.json'
    ])
    */

    addVitePlugin(vitePluginEslint(options.vite), { server: false })
    addWebpackPlugin(new EslintWebpackPlugin(options.webpack), { server: false })
  }
})
