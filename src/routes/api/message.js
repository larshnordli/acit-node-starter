import logger from '../../logger';
import Conversation from '../../lib/watson/conversation';

const conversation = new Conversation();

// Middleware /api/message
const message = async (req, res) => {
  let response: Object = null;
  try {
    const { body: { input: { text } } } = req;
    logger.debug(`Input text: `, text);
    const { body: { context } } = req;
    logger.debug(`Input context: \n`, context);
    response = await conversation.message(text, context);
    logger.debug(`Response: \n`, response);
  } catch (error) {
    logger.error(error);
  }
  res.send(response);
};

export default message;
