// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项

      scss: {
        additionalData: '@import "~@/variables.scss";'
      }

    }
  }
}
