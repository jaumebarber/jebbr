const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = env => {
  const isDevelopment = env.NODE_ENV === 'development'
  return {
    entry: {
      bundle: './src/index.js'
    },
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : '',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: ['babel-loader', 'eslint-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ['file-loader']
        },
        {
          test: /\.styles\.s(a|c)ss$/,
          loader: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: isDevelopment ? false : true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        },
        {
          test: /\.(scss|sass)$/,
          exclude: /\.styles.(s(a|c)ss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: isDevelopment ? false : true,
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['*', '.js', '.jsx', '.scss'] },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
      hot: true,
      compress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'jebbr.css',
        chunkFilename: '[id].css'
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  }
}
