import logger from '../../logger';
import Conversation from '../../lib/watson/conversation';

const conversation = new Conversation();

// Middleware for default route
const message = async (req, res) => {
  let response: Object = null;
  try {
    const { body: { input: { text } } } = req;
    const { body: { context } } = req;
    response = await conversation.message(text, context);
  } catch (error) {
    logger.error(error);
  }
  res.send(response);
};

export default message;
