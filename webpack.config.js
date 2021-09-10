const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
    clean: true,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
  })],
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};
