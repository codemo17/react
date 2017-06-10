import webpack from 'webpack';
import path from 'path';

export default {

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx' ],
    alias: {
      components: path.resolve(__dirname, './src/lib/components'),
      contacts: path.resolve(__dirname, './src/app/screens/contacts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: ['(node_modules|.dist)'],
      },
      {
        use: 'url-loader?limit=10000',
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: path.join(__dirname, 'src'),
      },
    ],
  },
}
