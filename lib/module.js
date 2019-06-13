module.exports = function () {
  this.extendBuild((config, ctx) => {
    if (ctx.isDev && ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: !!this.options.eslint && this.options.eslint.fix || false,
        }
      })
    }
  })
}

module.exports.meta = require('../package.json')
