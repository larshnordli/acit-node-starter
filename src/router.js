/* @flow */

import { Router } from 'express';

const router = new Router();

// Register your routes and middleware to handle them here!!
const defaultEndpoint = (req, res) => {
  res.json(`Your NodeJS server is running`);
};

const reactEndpoint = (req, res) => {
  res.json(`Welcome to React/NodeJS`);
};

router.get(`/react`, reactEndpoint);
router.get(`/`, defaultEndpoint);

export default router;
