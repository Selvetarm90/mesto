const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/scripts/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
      new MiniCssExtractPlugin(),
      new CleanWebpackPlugin()
    ],
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [{
           loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }]
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?)|eot|ttf|otf/,
          type: 'asset/resource'
        },
      
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      compress: true,
      port: 8080,
      open: true
    },
    devtool: 'inline-source-map'
};
