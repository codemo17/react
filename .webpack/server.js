import path from 'path';
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';

import configuration from './dev.config';

const port = 7000;
const app = express();
const compiled = webpack(configuration);

app.use(middleware(compiled, {
  noInfo: false,
  publicPath: configuration.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.info('==> 🚧  Webpack development server listening on port %s', port);
  }
});
