# @nuxtjs/eslint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> ESLint module for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Requirements

You need to ensure that you have `eslint` installed:

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

You can pass [eslint options](http://eslint.org/docs/developer-guide/nodejs-api#cliengine).

**Note**: That the config option you provide will be passed to the `CLIEngine`. This is a different set of options than what you'd specify in `package.json` or `.eslintrc`. See the [eslint docs](http://eslint.org/docs/developer-guide/nodejs-api#cliengine) for more detail.

### `cache`

- Type: `Boolean|String`
- Default: `false`

This option will enable caching of the linting results into a file. This is particularly useful in reducing linting time when doing a full build.

This can either be a `boolean` value or the cache directory path(ex: `'./.eslint-loader-cache'`).

If `cache: true` is used, the cache is written to the `./node_modules/.cache/eslint-loader` directory. This is the recommended usage.

### `eslintPath`

- Type: `String`
- Default: `eslint`

Path to `eslint` instance that will be used for linting. If the `eslintPath` is a folder like a official eslint, or specify a `formatter` option. Now you dont have to install `eslint`.

### `extensions`

- Type: `Array[String]`
- Default: `['ts', 'js', 'vue']`

Extensions that will be used by the loader.

### `fix`

- Type: `Boolean`
- Default: `false`

This option will enable [ESLint autofix feature](http://eslint.org/docs/user-guide/command-line-interface#fix).

**Be careful: this option will change source files.**

### `formatter`

- Type: `String|Function`
- Default: `stylish`

This option accepts a function that will have one argument: an array of eslint messages (object). The function must return the output as a string. You can use official [eslint formatters](https://eslint.org/docs/user-guide/formatters/).

### Errors and Warning

**By default the loader will auto adjust error reporting depending on eslint errors/warnings counts.** You can still force this behavior by using `emitError` **or** `emitWarning` options:

#### `emitError`

- Type: `Boolean`
- Default: `false`

Will always return errors, if this option is set to `true`.

#### `emitWarning`

- Type: `Boolean`
- Default: `false`

Will always return warnings, if option is set to `true`.

#### `failOnError`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any errors, if option is set to `true`.

#### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, if option is set to `true`.

#### `quiet`

- Type: `Boolean`
- Default: `false`

Will process and report errors only and ignore warnings, if this option is set to `true`.

#### `outputReport`

- Type: `Boolean|Object`
- Default: `false`

Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.

The `filePath` is an absolute path or relative to the webpack config: `output.path`. You can pass in a different `formatter` for the output file, if none is passed in the default/configured formatter will be used.

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
