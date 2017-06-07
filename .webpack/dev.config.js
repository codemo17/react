import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.config.base';

export default  webpackMerge(
  baseConfig,
  {
    entry: {
      main: [
        'babel-polyfill',
        './src/index.js',
      ],
    },
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.bemcss/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader?sourceMap',
          ],
        },
        {
          test: /\.bemcss/,
          use: [
            'style-loader',
            'css-loader?modules=true&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ],
        },
        {
          test: /\.sass/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader?sourceMap',
          ],
        },
        {
          test: /\.css/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('development'),
          BABEL_ENV: JSON.stringify('developement'),
        },
        __DEV__: true,
      }),
    ],
  }
)