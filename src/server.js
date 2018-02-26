/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import morgan from 'morgan';
import router from './router';
import logger from './logger';
import config from './config';

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  // send entire app down. Process manager will restart it
  process.exit(1);
});

const app = express();

//
// If you are using proxy from external machine, you can set TRUST_PROXY env
// Default is to trust proxy headers only from loopback interface.
// -----------------------------------------------------------------------------
app.set('trust proxy', 'loopback');

//
// Logging for network requests to Node.js
// -----------------------------------------------------------------------------
app.use(morgan('combined', { stream: logger.stream }));

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
app.use(
  cors({
    origin(origin, next) {
      const whitelist = process.env.CORS_ORIGIN
        ? process.env.CORS_ORIGIN.split(',')
        : [];
      next(null, whitelist.includes(origin));
    },
    credentials: true,
  }),
);
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');
pe.withoutColors(); // So that logfile output is clean.
pe.start(); // Ensures that PrettyError is used app-wide.

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(pe.render(err));
  res.status(500);
  res.send();
});

//
// Launch the server
// -----------------------------------------------------------------------------
if (!module.hot) {
  app.listen(config.port, () => {
    console.info(`The server is running at http://localhost:${config.port}/`);
  });
}

//
// Hot Module Replacement
// -----------------------------------------------------------------------------
if (module.hot) {
  app.hot = module.hot;
  module.hot.accept('./router', () => {
    /* eslint-disable-next-line global-require */
    router = require('./router');
  });
}

export default app;
