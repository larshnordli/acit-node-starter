/* @flow */

import { Router } from 'express';

const router = new Router();

// Register your endpoints and middleware to handle them here

const defaultEndpoint = (req, res) => {
  res.send('Your NodeJS server is live');
};

router.get('/', defaultEndpoint);

export default router;
