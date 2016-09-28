var webpack = require('webpack')
var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.json'],
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [
          path.join(__dirname, 'node_modules'),
          path.join(__dirname, 'bower_components'),
        ],
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.(css|scss|less)$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?sourceMap!' +
          'autoprefixer-loader?browsers=last 3 versions!' +
          'less-loader?sourceMap!' +
          'sass-loader?outputStyle=expanded'
        ),
        include: [
          path.join(__dirname, 'src'),
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/,
        loader: 'file',
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url',
      },
    ],
  },
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
      },
    })
  )
} else {
  config.devTool = 'inline-source-map'

  config.devServer = {
    port: 3000,
    historyApiFallback: true,
  }
}

module.exports = config
