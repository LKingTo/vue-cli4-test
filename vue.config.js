module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: true,
  runtimeCompiler: false,
  transpileDependencies: ["vuetify"],
  productionSourceMap: true,
  integrity: false,
  configureWebpack: {},
  css: {
    requireModuleExtension: true,
    extract: false,
    sourceMap: false,
    loaderOptions: {
      css: {},
      postcss: {}
    }
  },
  devServer: {
    host: "localhost",
    port: 5788,
    https: false,
    hotOnly: false
  },
  parallel: true,
  pwa: {},
  pluginOptions: {}
};
