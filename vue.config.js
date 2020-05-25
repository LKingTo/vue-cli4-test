const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new WebpackIconfontPluginNodejs({
        fontName: 'm-font',
        cssPrefix: 'm-icon',
        svgs: path.resolve(__dirname, 'src/styles/svg/**/*.svg'),
        // template: path.resolve(__dirname, 'css.njk'),
        fontsOutput: path.resolve(__dirname, 'src/fonts/'),
        cssOutput: path.resolve(__dirname, 'src/styles/iconFont.css'),
        htmlOutput: false,
        // jsOutput: path.resolve(__dirname, 'fonts/fonts.js'),
        // formats: ['ttf', 'woff', 'svg'],
      }),
    ],
  },
  css: {
  },
  // webpack-dev-server 相关配置: https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: "localhost",
    port: 5788,
    https: false,
    hotOnly: false,
    // 代理选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    // proxy: {}
  },
};
