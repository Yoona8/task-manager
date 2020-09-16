const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts/main.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist')
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 3000
  }
};
