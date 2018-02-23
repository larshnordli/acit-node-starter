/* @flow */

/*  eslint-disable class-methods-use-this */

export default class Conversation {
  message(text: String, context?: Object): Promise<any> {
    return new Promise((resolve, reject) => {
      if (text && text !== 'Error') {
        const contextNew = context;
        if (contextNew) {
          contextNew.test = 'test';
        }
        const response = {
          output: {
            text: ['Test text'],
          },
          context: contextNew,
        };
        resolve(response);
      } else {
        reject(new Error('Mock error'));
      }
    });
  }
}
