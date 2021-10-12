const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    'content-script': './content-script/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/build'
  },
  resolve: {
    fallback: { util: false },
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.join(__dirname, './components'),
      utils: path.join(__dirname, './utils'),
      icons: path.join(__dirname, './icons')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      }
    ]
  }
}
