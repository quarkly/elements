const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const OUTPUT_DIR = 'build';
const CLIENT_DIR = 'client';

module.exports = {
  entry: {
    client: `./src/${CLIENT_DIR}`
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new CleanWebpackPlugin([OUTPUT_DIR])
  ],
  output: {
    path: path.resolve(__dirname, `../${OUTPUT_DIR}`),
    publicPath: '/',
    filename: '[name].js'
  }
};
