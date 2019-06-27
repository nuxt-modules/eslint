# ESLint Module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> ESLint will run on saving

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `@nuxtjs/eslint-module` dependency with `yarn` or `npm` to your project
2. Add `@nuxtjs/eslint-module` to the `devModules` section of `nuxt.config.js`
3. Configure it:

```js
{
  devModules: [
    '@nuxtjs/eslint-module'
  ]
}
```

## Options

### `fix`

- Default: `false`

This option will enable [ESLint autofix feature](http://eslint.org/docs/user-guide/command-line-interface#fix).

**Be careful: this option will change source files.**

### `emitError`

- Default: `false`

Loader will always return errors if this option is set to `true`.

### `emitWarning`

- Default: `false`

Loader will always return warnings if option is set to `true`. If you're using hot module replacement, you may wish to enable this in development, or else updates will be skipped when there's an eslint error.

### `quiet`

- Default: `false`

Loader will process and report errors only and ignore warnings if this option is set to true

### `failOnWarning`

- Default: `false`

Loader will cause the module build to fail if there are any eslint warnings.

#### `failOnError`

- Default: `false`

Loader will cause the module build to fail if there are any eslint errors.

> See all options in [eslint-loader](https://github.com/webpack-contrib/eslint-loader#options).

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/@nuxtjs/eslint-module.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[npm-downloads-src]: https://img.shields.io/npm/v/@nuxtjs/eslint-module/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/eslint-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/eslint-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/eslint-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/eslint-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/eslint-module

[david-dm-src]: https://david-dm.org/nuxt-community/eslint-module/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/nuxt-community/eslint-module

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
