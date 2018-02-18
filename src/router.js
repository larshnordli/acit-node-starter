/* @flow */

import { Router } from 'express';
import passport from './passport';

const router = new Router();

router.use(passport.initialize());

// Register your routes and middleware to handle them here!!
const defaultEndpoint = (req, res) => {
  res.send(`Your NodeJS server is running`);
};

// const authenticate = (req, res) => {
//   passport.authenticate('basic', { session: false })((err, user, info) => {});
//   res.send(`You are authenticated`);
// };

router.get(`/`, defaultEndpoint);
// router.get(`/authenticate`, authenticate);

export default router;
