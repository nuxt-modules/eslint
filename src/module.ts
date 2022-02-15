import { resolve } from 'path'
import { defineNuxtModule, addVitePlugin, addWebpackPlugin } from '@nuxt/kit'
import { name, version } from '../package.json'
import type { Options as WebpackPlugin } from 'eslint-webpack-plugin'
// import type { Options as VitePlugin } from 'vite-plugin-eslint'
import type { ESLint } from 'eslint'

interface VitePlugin {
  cache?: boolean;
  fix?: boolean;
  include?: string | string[];
  exclude?: string | string[];
  formatter?: string | ESLint.Formatter;
  throwOnWarning?: boolean;
  throwOnError?: boolean;
}

export interface ModuleOptions {
  vite: VitePlugin,
  webpack: WebpackPlugin
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'eslint'
  },
  defaults: nuxt => ({
    vite: {
      cache: true,
      fix: false,
      include: [
        './**/*.js',
        './**/*.jsx',
        './**/*.ts',
        './**/*.tsx',
        './**/*.vue',
      ],
      throwOnWarning: true,
      throwOnError: true,
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
    const filesToWatch = [
      '.eslintrc',
      '.eslintrc.json',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.js'
    ]

    nuxt.options.watch = nuxt.options.watch || []
    nuxt.options.watch.push(
      ...filesToWatch.map(file => resolve(nuxt.options.rootDir, file))
    )

    if (nuxt.options.vite) {
      const vitePluginEslint = require('vite-plugin-eslint')

      return addVitePlugin(vitePluginEslint(options.vite), {
        build: false,
      })
    }

    const EslintWebpackPlugin = require('eslint-webpack-plugin')

    addWebpackPlugin(new EslintWebpackPlugin(options.webpack), {
      build: false,
      server: false
    })
  }
})
