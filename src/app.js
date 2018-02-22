/* @flow */

import path from 'path';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import PrettyError from 'pretty-error';
import morgan from 'morgan';
import router from './router';
import logger from './logger';

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client/build')));
  // app.use(express.static('../client/build/'));
}

app.use(morgan('combined', { stream: logger.stream }));

app.set('trust proxy', 'loopback');

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

const pe = new PrettyError();
pe.skipNodeFiles();
pe.skipPackage('express');
pe.withoutColors(); // So that logfile output is clean.
pe.start(); // Ensures that PrettyError is used app-wide.

app.use((err, req, res, next) => {
  process.stderr.write(pe.render(err));
  next();
});

export default app;
