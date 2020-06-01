const path = require('path');

const config = () => {

  return {
    entry: {
      index: './index.ts'
    },
    output: {
      path: path.resolve(__dirname, 'output'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test:/\.ts$/i,
          use: ['./loaderPrint.js', 'ts-loader'],
          exclude: /node_modules/
        },
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    mode: 'production',
    optimization: {
      minimize: false,
    }
  }
};

module.exports = config;
