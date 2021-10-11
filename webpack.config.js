module.exports = {
  mode: 'production',
  entry: {
    'content-script': './content-script/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname
  },
  resolve: { fallback: { util: false } },
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
