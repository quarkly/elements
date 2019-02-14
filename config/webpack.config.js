const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const OUTPUT_DIR = 'build';

module.exports = {
  entry: './src/index.js',
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
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: '[name].js'
  }
};
