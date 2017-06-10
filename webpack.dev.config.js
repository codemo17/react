import webpack from 'webpack';
import webpackMerge from 'webpack-merge';

import baseConfig from './webpack.base.config';

export default webpackMerge(
  baseConfig,
  {
    devtool: 'cheap-module-eval-source-map',
    entry: {
      main: [
        'babel-polyfill',
        './src/app/index.js',
      ],
    },
    output: {
      publicPath: '/',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.bemcss$/,
          use: [
            'style-loader',
            'css-loader?modules=true&importLoaders=1&localIdentName=[local]___[hash:base64:5]',
            'resolve-url-loader',
            'sass-loader?sourceMap',
          ],
        },
        {
          test: /\.sass$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader?sourceMap',
          ],
        },
        {
          test: /\.css$/,
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
