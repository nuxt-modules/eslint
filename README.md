# @nuxtjs/eslint-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> ESLint module for Nuxt

[📖 **Release Notes**](./CHANGELOG.md)

---

**Note:** This branch is for **Nuxt 3** or **Nuxt Bridge** compatible module.
Checkout the [`nuxt2` branch](https://github.com/nuxt-community/eslint-module/tree/nuxt2) for **Nuxt 2** support.

---

## Requirements

You need to ensure that you have `eslint >= 7` installed:

With `pnpm`

```bash
pnpm add -D eslint
```

Or, with `yarn`

```bash
yarn add -D eslint
```

Or, with `npm`

```bash
npm install -D eslint
```

## Setup

1. Add `@nuxtjs/eslint-module` dependency to your project

With `pnpm`

```bash
pnpm add -D @nuxtjs/eslint-module
```

Or, with `yarn`

```bash
yarn add -D @nuxtjs/eslint-module
```

Or, with `npm`

```bash
npm install -D @nuxtjs/eslint-module
```

2. Add `@nuxtjs/eslint-module` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    // Simple usage
    '@nuxtjs/eslint-module',

    // With options
    ['@nuxtjs/eslint-module', { /* module options */ }]
  ]
})
```

### Using top level options

```js
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module'
  ],
  eslint: {
    /* module options */
  }
})
```

## Options

You can pass [eslint options](https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions).

Note that the config option you provide will be passed to the `ESLint` class.
This is a different set of options than what you'd specify in `package.json` or `.eslintrc`.
See the [eslint docs](https://eslint.org/docs/latest/integrate/nodejs-api#-new-eslintoptions) for more details.

### `cache`

- Type: `Boolean`
- Default: `true`

**Note**: The cache is enabled by default to decrease execution time.

### `include`

- Type: `String|Array[String]`
- Default: `[nuxt.options.srcDir.'/**/*.{js,jsx,ts,tsx,vue}']`

Specify directories, files, or globs.

### `exclude`

- Type: `Array[String]`
- Default: `['**/node_modules/**', nuxt.options.buildDir]`

Specify the files and/or directories to exclude.

### `eslintPath`

- Type: `String`
- Default: `eslint`

Path to `eslint` instance that will be used for linting.

### `formatter`

- Type: `String|Function`
- Default: `'stylish'`

Accepts a function that will have one argument: an array of eslint messages (object).
The function must return the output as a string.
You can use official [eslint formatters](https://eslint.org/docs/user-guide/formatters/).

### `lintOnStart`

- Type: `Boolean`
- Default: `true`

Check all matching files on project startup, too slow, turn on discreetly.

### `emitWarning`

- Type: `Boolean`
- Default: `true`

The warnings found will be printed.

### `emitError`

- Type: `Boolean`
- Default: `true`

The errors found will be printed.

### `failOnWarning`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any warnings, based on `emitWarning`.

### `failOnError`

- Type: `Boolean`
- Default: `false`

Will cause the module build to fail if there are any errors, based on `emitError`.

## Contributing

You can contribute to this module online with CodeSandBox:

[![Edit @nuxtjs/robots](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/nuxt-community/eslint-module/?fontsize=14&hidenavigation=1&theme=dark)

Or locally:

1. Clone this repository
2. Install dependencies using `pnpm install`
3. Prepare development server using `pnpm dev:prepare`
4. Build module using `pnpm build`
5. Launch playground using `pnpm dev`

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
