const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: {
    index: ['babel-polyfill', paths.sourceTask4('index.root.jsx')],
  },
  output: {
    path: paths.target(''),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|__tests__|lib)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${paths.target('index.html')}`,
      template: `${paths.sourceTask4('index.html')}`,
      chunks: ['index'],
      inject: 'body',
    }),
    new ESLintPlugin(
      {
        extensions: ['js', 'jsx'],
        failOnWarning: false,
        failOnError: false,
        threads: 3,
        fix: true,
      },
    ),
  ],
  devServer: {
    contentBase: paths.target(''),
    compress: true,
    port: 9004,
  },
  devtool: 'source-map',
};
