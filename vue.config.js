const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const isProdMode = ['production', 'prod'].includes(process.env.NODE_ENV)

module.exports = {
  outputDir: 'dist',
  publicPath: isProdMode ? process.env.VUE_APP_PUBLIC_PATH : './',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
      .set('assets', resolve('src/assets'))
      .set('router', resolve('src/router'))
      .set('store', resolve('src/store'))
      .set('utils', resolve('src/utils'))
      .set('api', resolve('src/api'))
  },
  devServer: {
    proxy: {
      '/api/getMusicInfo': {
        target: 'https://u.y.qq.com/cgi-bin/musics.fcg',
        changeOrigin: true,
        pathRewrite : {
          '^/api/getMusicInfo' : ''
        }
      }
    }
  }
}