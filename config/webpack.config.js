const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const OUTPUT_DIR = 'build';
// const CLIENT_DIR = 'client';

module.exports = {
  entry: {
    elements: `./src/elements`,
  },
  output: {
    path: path.resolve(__dirname, `../${OUTPUT_DIR}`),
    publicPath: '/',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
    new CleanWebpackPlugin([OUTPUT_DIR]),
  ],
  externals: {
    react: 'commonjs react',
  },
};
