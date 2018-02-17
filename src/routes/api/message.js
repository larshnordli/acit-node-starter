/* @flow */

import { $Request, $Response } from 'express';
import logger from '../../logger';
import Conversation from '../../lib/watson/conversation';

const conversation = new Conversation();

/**
 * This function handles the logic for the chatbot endpoint.
 * It returns the Watson Conversation response to the client.
 * @param  {$Request} req
 * @param  {$Response} res
 */
const message = async (req: $Request, res: $Response) => {
  let response: Object = {};
  try {
    const { body: { input: { text } } } = req;
    const { body: { context } } = req;
    logger.debug(`Sending text:`, text, `and context\n`, context);
    response = await conversation.message(text, context);
    res.send(response);
  } catch (error) {
    logger.error(
      `There was an error retrieving a response from Watson Conversation`,
      error,
    );
    res.status(500).end();
  }
};

export default message;
