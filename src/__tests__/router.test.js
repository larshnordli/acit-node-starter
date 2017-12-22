/* eslint-env jest */

/* eslint-disable import/first */

jest.mock('../lib/watson/conversation');

import message from '../routes/api/message';

// Mocked inputs
const res = {
  status(statusCode) {
    this.statusCode = statusCode;
  },
  send(text) {
    if (!this.statusCode) {
      this.statusCode = 200;
    }
    this.text = text;
    return this;
  },
};

//
// Begin Tests
//

// Global variables for testing

describe('smoke test', () => {
  test('confirm we get a response from the router', async () => {
    expect.assertions(1);
    const req = {
      text: 'Test',
      context: {},
    };
    await message(req, res);
    expect(res.statusCode).toBe(200);
  });
});

describe('unit test', () => {
  test('verify response from router', async () => {
    expect.assertions(3);
    const req = {
      text: 'Test',
      context: {},
    };
    await message(req, res);
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Test text');
    expect(res.context).toBeUndefined();
  });
});

/* describe('unit test', () => {
  describe('negative test', () => {
    test('verify response from router when conversation sends an error', async () => {
      expect.assertions(3);
      const req = {
        text: 'Error', // mock service throws an error when text = "Error"
        context: {},
      };
      await message(req, res);
      expect(res.statusCode).toEqual(200);
      expect(res.text).toEqual(
        'There was an error retrieving a response from the conversation service!',
      );
      expect(res.context).toBeUndefined();
    });
  });
}); */
