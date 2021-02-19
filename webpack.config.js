const path = require('path');
const webpack = require('webpack');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appRoot = path.resolve(__dirname, 'example');
const PORT = 2088;

module.exports = (env, args) => {
  const isDev = args && args.mode === 'development';
  return {
    context: path.resolve(__dirname),
    entry: {
      index: './example/index.js',
      vendor: [
        'vue'
      ]
    },
    output: {
      path: path.resolve(__dirname, 'builds', 'site'),
      filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[contenthash].bundle.js',
      sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[name].[chunkhash].bundle.map',
      chunkFilename: isDev ? 'js/[id].chunk.js' : 'js/[id].[chunkhash].chunk.js',
      publicPath: isDev ? '/' : ''
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: [
            {
              loader: 'vue-loader'
            }
          ]
        },
        {
          test: /\.html$/,
          loader: 'vue-template-loader',
          options: {
            transformToRequire: {
              img: 'src'
            }
          }
        },
        {
          test: /\.(js|ts)$/,
          loader: 'babel-loader',
          exclude: [/node_modules/]
        },
        {test: /\.(css)/, use: ['style-loader', 'css-loader']},
        {test: /\.png$/, use: ['url-loader?limit=100000']},
        {test: /\.jpg$/, loader: 'file-loader'},
        {test: /\.jpeg$/, loader: 'file-loader'},
        {test: /\.webp$/, loader: 'file-loader'},
        {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=application/font-woff']},
        {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=application/octet-stream']},
        {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
        {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=image/svg+xml']}
      ]
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        vue: isDev ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js'
      },
      modules: [
        appRoot,
        'node_modules'
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: PORT,
      inline: true,
      compress: true,
      publicPath: '/',
      stats: 'minimal'
    },
    stats: 'minimal',
    performance: {
      hints: false
    },
    devtool: isDev ? 'eval' : 'cheap-source-map',
    optimization: {
      splitChunks: {chunks: 'all'}
    },
    plugins: [
      new VueLoaderPlugin(),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: `!!html-loader!${path.resolve(appRoot, 'index.html')}`
      }),
      new webpack.DefinePlugin({
        'process.env': {NODE_ENV: isDev ? '"development"' : '"production"'}
      })
    ]
  };
};
