/* @flow */

import { Router } from 'express';

const router = new Router();

// Register your routes and middleware to handle them here!!
const defaultEndpoint = (req, res) => {
  res.json(`Your NodeJS server is running`);
};

const testEndpoint = (req, res) => {
  res.json('Test endpoint');
};

router.get(`/test`, testEndpoint);
router.get(`/`, defaultEndpoint);

export default router;
