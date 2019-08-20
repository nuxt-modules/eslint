# @nuxtjs/eslint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> [ESLint](https://eslint.org) module for [Nuxt.js](https://nuxtjs.org)

[📖 **Release Notes**](./CHANGELOG.md)

## Requirements

You need to ensure that you have `eslint` installed

```bash
yarn add --dev eslint # or npm install --save-dev eslint
```

## Setup

1. Add `@nuxtjs/eslint-module` dependency to your project

```bash
yarn add --dev @nuxtjs/eslint-module # or npm install --save-dev @nuxtjs/eslint-module
```

2. Add `@nuxtjs/eslint-module` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt `< 2.9.0`, use `modules` instead.

```js
{
  buildModules: [
    // Simple usage
    '@nuxtjs/eslint-module',

    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ]
}
```

### Using top level options

```js
{
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    /* module options */
  }
}
```

## Options

### `cache`

- Default: `false`

This option will enable caching of the linting results into a file.
This is particularly useful in reducing linting time when doing a full build.

This can either be a `boolean` value or the cache directory path(ex: `'./.eslint-loader-cache'`).

If `cache: true` is used, the cache file is written to the `./node_modules/.cache` directory.
This is the recommended usage.

### `emitError`

- Default: `false`

Loader will always return errors if this option is set to `true`.

### `emitWarning`

- Default: `false`

Loader will always return warnings if option is set to `true`. If you're using hot module replacement, you may wish to enable this in development, or else updates will be skipped when there's an eslint error.

### `eslintPath`

- Default: `'eslint'`

Path to `eslint` instance that will be used for linting.
If the `eslintPath` is a folder like a official eslint, or specify a `formatter` option. now you dont have to install `eslint`.

### `failOnError`

- Default: `false`

Loader will cause the module build to fail if there are any eslint errors.

### `failOnWarning`

- Default: `false`

Loader will cause the module build to fail if there are any eslint warnings.

#### `fix`

- Default: `false`

This option will enable [ESLint autofix feature](http://eslint.org/docs/user-guide/command-line-interface#fix).

**Be careful: this option will change source files.**

### `formatter`

- Default: `eslint stylish formatter`

Loader accepts a function that will have one argument: an array of eslint messages (object).
The function must return the output as a string.
You can use official eslint formatters.

### `outputReport`

- Default: `false`

Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI.

The `filePath` is relative to the webpack config: output.path.
You can pass in a different formatter for the output file, if none is passed in the default/configured formatter will be used.

### `quiet`

- Default: `false`

Loader will process and report errors only and ignore warnings if this option is set to true.

> See all options in [eslint-loader](https://github.com/webpack-contrib/eslint-loader#options).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/eslint-module/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/eslint-module.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/eslint-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/eslint-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/eslint-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/eslint-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/eslint-module.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/eslint-module
