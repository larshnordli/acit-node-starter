/* @flow */

import ConversationV1 from 'watson-developer-cloud/conversation/v1';
import config from '../../config';

/**
 * Initialize Watson Conversation SDK.
 */
const conversationSDK = new ConversationV1({
  username: config.watson.conversation.username,
  password: config.watson.conversation.password,
  version_date: config.watson.conversation.version_date,
  headers: {
    'X-Watson-Learning-Opt-Out': config.watson.opt_out_logging,
  },
});

/**
 * Conversation class that holds all functions about Watson Conversation.
 * Add more functions that leverage the Watson Conversation SDK here.
 */
class Conversation {
  /**
   * This synchronous function leverages the SDK to send a
   * message to Watson Conversation.
   * It returns a JSON object from Watson Conversation
   * @param  {string} text
   * @param  {Object=} context
   * @returns Promise
   */
  message = (text: string, context?: Object): Promise<any> => {
    const payload = {
      workspace_id: config.watson.conversation.workspace,
      input: {
        text,
      },
      context,
    };
    return new Promise((resolve, reject) =>
      conversationSDK.message(payload, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }),
    );
  };
  /**
   * This synchronous function leverages the Watson Conversation SDK
   * to obtain a JSON representation of your Watson Service.
   * @returns Promise
   */
  static getWorkspace = (): Promise<any> => {
    const params = {
      workspace_id: config.watson.conversation.workspace,
      export: true,
    };
    return new Promise((resolve, reject) =>
      conversationSDK.getWorkspace(params, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }),
    );
  };
}

export default Conversation;
