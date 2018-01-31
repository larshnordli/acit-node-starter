/* @flow */

import { Router } from 'express';
import message from './routes/api/message';

const router = new Router();

// Register your routes and middleware to handle them here!!
router.post('/api/message', message);

export default router;
