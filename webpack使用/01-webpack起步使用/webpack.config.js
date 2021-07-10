const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: 'dist/'
  },
  resolve: {
    extensions: ['.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    // 请确保引入这个插件！
    new VueLoaderPlugin(),
    new webpack.BannerPlugin('版权所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new UglifyjsWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      /*{
        test: /\.less$/i,
        //use: ['style-loader', 'css-loader', 'less-loader'],
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'less-loader'},
        ]
      },*/
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            //小于8kb会使用base64编码
            //大于8kb将文件打包到dist中， 需要引入file-loader加载器
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      }
    ]
  }
};
