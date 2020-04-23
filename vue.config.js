module.exports = {
  // 基本路径(相对域名的根路径),默认'/'
  publicPath: '/',
  // 输出文件目录,默认'dist'
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: '',
  // 指定生成的 index.html 的输出路径
  indexPath: 'index.html',
  // 默认生成的静态资源包含hash
  filenameHashing: true,
  // 多页应用
  /** pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/subpage/main.js'
  },**/
  // eslint保存时提示设置
  lintOnSave: process.env.NODE_ENV !== 'production',
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // babel-loader显示转译node_modules中的某依赖
  transpileDependencies: [],
  // 生产环境的 source map,默认true
  productionSourceMap: true,
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: undefined,
  // SRI设置
  integrity: false,
  // webpack merge对象
  configureWebpack: {},
  // webpack-chain操作loader：https://github.com/neutrinojs/webpack-chain
  chainWebpack: config => { /* 链式操作loader */console.log(config)},
  css: {
    // 是否显示要求css module模块的文件名(默认： *.module.[ext])含'.module'，默认值为true
    requireModuleExtension: true,
    // 是否使用css分离，默认生产环境下是 true，开发环境下是 false
    extract: process.env.NODE_ENV === 'production',
    // 是否为 CSS 开启 source map，为true会影响构建性能
    sourceMap: false,
    // 向CSS相关的loader传递选项
    loaderOptions: {
      css: {/* 这里的选项会传递给 css-loader */},
      postcss: {/* 这里的选项会传递给 postcss-loader */}
    }
  },
  // webpack-dev-server 相关配置: https://webpack.js.org/configuration/dev-server/
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    // 代理选项：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
    proxy: {}
  },
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: require('os').cpus().length > 1,
  // pwa插件选项：https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // 第三方插件配置
  pluginOptions: {}
}
