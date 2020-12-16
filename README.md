# @nuxtjs/eslint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> ESLint module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Requirements

You need to ensure that you have `eslint >= 7` installed:

```bash
yarn add --dev eslint # or npm install --save-dev eslint
```

## Setup

1. Add `@nuxtjs/eslint-module` dependency to your project

```bash
yarn add --dev @nuxtjs/eslint-module # or npm install --save-dev @nuxtjs/eslint-module
```

2. Add `@nuxtjs/eslint-module` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/eslint-module',

    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    /* module options */
  }
}
```

## Options

You can pass [eslint options](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions).

Note that the config option you provide will be passed to the `ESLint` class.
This is a different set of options than what you'd specify in `package.json` or `.eslintrc`.
See the [eslint docs](https://eslint.org/docs/developer-guide/nodejs-api#-new-eslintoptions) for more details.

### `cache`

- Type: `Boolean`
- Default: `true`

**Note**: The cache is enabled by default to decrease execution time.

### `context`

- Type: `String`
- Default: `srcDir`

A string indicating the root of your files.

### `eslintPath`

- Type: `String`
- Default: `eslint`

Path to `eslint` instance that will be used for linting.

### `exclude`

- Type: `String|Array[String]`
- Default: `'node_modules'`

Specify the files and/or directories to exclude. Must be relative to `options.context`.

### `extensions`

- Type: `String|Array[String]`
- Default: `['js', 'ts', 'vue']`

Specify extensions that should be checked.

### `files`

- Type: `String|Array[String]`
- Default: `null`

Specify directories, files, or globs. Must be relative to `options.context`.
Directories are traversed recursively looking for files matching `options.extensions`.
File and glob patterns ignore `options.extensions`.

### `fix`

- Type: `Boolean`
- Default: `false`

Will enable [ESLint autofix feature](https://eslint.org/docs/developer-guide/nodejs-api#cliengineoutputfixes).

**Be careful: this option will change source files.**

### `formatter`

- Type: `String|Function`
- Default: `'stylish'`

Accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official [eslint formatters](https://eslint.org/docs/user-guide/formatters/).

### `lintDirtyModulesOnly`

- Type: `Boolean`
- Default: `true`

Lint only changed files, skip lint on start.

### `threads`

- Type: `Boolean | Number`
- Default: `false`

Will run lint tasks across a thread pool. The pool size is automatic unless you specify a number.

### Errors and Warning

**By default the plugin will auto adjust error reporting depending on eslint errors/warnings counts.**
You can still force this behavior by using `emitError` **or** `emitWarning` options:

#### `emitError`

- Type: `Boolean`
- Default: `false`

Will always return errors, if set to `true`.

#### `emitWarning`

- Type: `Boolean`
- Default: `false`

Will always return warnings, if set to `true`.

#### `failOnError`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any errors, if set to `true`.

#### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, if set to `true`.

#### `quiet`

- Type: `Boolean`
- Default: `false`

Will process and report errors only and ignore warnings, if set to `true`.

#### `outputReport`

- Type: `Boolean|Object`
- Default: `false`

Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.

The `filePath` is an absolute path or relative to the webpack config: `output.path`.
You can pass in a different `formatter` for the output file,
if none is passed in the default/configured formatter will be used.

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/eslint-module/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/eslint-module.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[github-actions-ci-src]: https://github.com/nuxt-community/eslint-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/eslint-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/eslint-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/eslint-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/eslint-module.svg
[license-href]: https://npmjs.com/package/@nuxtjs/eslint-module
