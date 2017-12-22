import logger from '../../logger';
import Conversation from '../../lib/watson/conversation';

const conversation = new Conversation();

// Middleware for default route
const message = async (req, res) => {
  let stringifiedOutput: string = '';
  try {
    const response: Object = await conversation.message('Hello');
    const { output: { text } } = response;
    stringifiedOutput = text.join('. ');
  } catch (error) {
    logger.error(error);
    stringifiedOutput = `There was an error retrieving a response from the conversation service!`;
  }
  res.send(stringifiedOutput);
};

export default message;
