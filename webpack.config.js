const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@atomComponents': path.resolve(__dirname, 'src/atomComponents'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@reducers': path.resolve(__dirname, 'src/reducers'),
      '@actions': path.resolve(__dirname, 'src/actions'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@globalStyles': path.resolve(__dirname, 'src/globalStyles')
    }
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.otf|jpg|jpeg|png|svg$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/'
          }
        }
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3005
  }
}
