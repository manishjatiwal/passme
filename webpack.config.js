const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    content: './content/index.js'
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
      helpers: path.join(__dirname, './helpers'),
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
