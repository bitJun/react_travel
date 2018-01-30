let webpack = require('webpack');
let path = require("path");
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let ROOT_PATH = path.resolve(__dirname);
let BUILD_PATH = path.resolve(ROOT_PATH, 'dist');
let APP_PATH = path.resolve(ROOT_PATH, 'app');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(APP_PATH,'index.jsx')
  ],
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js',
    publicPath: '/'
  },
  context: path.resolve(__dirname, 'app'),
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 8080,
    publicPath: '/',
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["es2015",'react'] }
      },
      {
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'new webpack'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      // names: ["app", "subPageA"]
     // (选择 chunks，或者忽略该项设置以选择全部 chunks)
      children: true,
      // (选择所有被选 chunks 的子 chunks)
      async: true,
      // (创建一个异步 公共chunk)
      // minChunks: 3,
      // (在提取之前需要至少三个子 chunk 共享这个模块)
    }),
    new webpack.optimize.UglifyJsPlugin({//压缩
      compress: {
        warnings: false//删除警告
      },
      output: {
        comments: false,  // 删除注释
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('index.css')
  ]
}