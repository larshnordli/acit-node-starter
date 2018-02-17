/* @flow */

import { Router } from 'express';

const router = new Router();

// Register your routes and middleware to handle them here!!
const defaultEndpoint = (req, res) => {
  res.send(`Your NodeJS server is running`);
};

router.get(`/`, defaultEndpoint);

export default router;
