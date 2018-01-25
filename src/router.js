/* @flow */

import { Router } from 'express';
import message from './routes/api/message';
import beginConversation from './routes/home';

const router = new Router();

// Register your routes and middleware to handle them here!!
router.post('/api/message', message);
router.get('/', beginConversation);

export default router;
