//const path = require('path')

module.exports = {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    },
  },
 /* module:{
    rules:[
      {
        test:'/\.css$/',
        use:['style-loader','css-loader']
      },
      {
        test:/\.(png|jpg|gif|svg|jpeg)$/,
        use:[
          {
          loader:'url-loader',
          options:{
            //当加载的图片小于limit时，会将图片编译成base64字符串格式
            //当加载的图片大于limit时，需要使用file-loader模块进行加载
            limit:30000,

            name:'img/[name].[hash:8].[ext]'
          },

        }]
      }
]
  }*/
}
