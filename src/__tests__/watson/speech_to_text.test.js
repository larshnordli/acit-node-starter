/* eslint-env jest */

import toBeType from 'jest-tobetype';

import SpeechToText from '../../../src/lib/watson/speech_to_text';

expect.extend(toBeType);

const speechToText = new SpeechToText();

//
// Test helper functions
//

//
// Begin Tests
//

// Global variables for testing
describe('smoke test', () => {
  test('confirm we get a response from Watson', async () => {
    expect.assertions(1);
    await expect(
      speechToText.recognize(
        './src/__tests__/resources/audio-file.flac',
        'audio/flac',
      ),
    ).resolves.toBeDefined();
  });
});

describe('unit test', () => {
  test('validate default recognize output structure from Watson', async () => {
    expect.assertions(7);
    const response: Object = await speechToText.recognize(
      './src/__tests__/resources/audio-file.flac', // audio file path
      'audio/flac', // audio content type
    );
    expect(response).toBeType('object');
    expect(response.results).toBeType('array');
    expect(response.results[0]).toBeType('object');
    expect(response.results[0].alternatives).toBeType('array');
    expect(response.results[0].alternatives[0].transcript).toBeType('string');
    expect(response.results[0].alternatives[0].confidence).toBeType('number');
    expect(response.results[0].final).toBeType('boolean');
  });
});

describe('unit test', () => {
  test('validate that params from config are read by watson stt service', async () => {
    expect.assertions(6);
    const response: Object = await speechToText.recognize(
      './src/__tests__/resources/audio-file.flac', // audio file path
      'audio/flac', // audio content type
      undefined, // model - default
      undefined, // customization string - default
      undefined, // inactivity timeout - default
      undefined, // keywords - default
      undefined, // keywordsThreshold - default
      undefined, // maxAlternatives- default
      undefined, // wordAlternativsThreshold - default
      undefined, // wordConfidence - default
      'true', // timestamps - I want to test if strings get converted to boolean downstream
      undefined, // profanity filter - default
      undefined, // smart_formatting - default
      true, // speaker labels - testing if traditional boolean works
    );
    expect(response).toBeType('object');
    expect(response.speaker_labels).toBeType('array');
    expect(response.results).toBeType('array');
    expect(response.results[0]).toBeType('object');
    expect(response.results[0].alternatives).toBeType('array');
    expect(response.results[0].alternatives[0].timestamps).toBeType('array');
  });
});

describe('integration test', () => {
  test('validate transcript from speech to text service', async () => {
    expect.assertions(1);
    const response: Object = await speechToText.recognize(
      './src/__tests__/resources/audio-file.flac',
      'audio/flac',
    );
    expect(response.results[0].alternatives[0].transcript).toBe(
      'several tornadoes touch down as a line of severe thunderstorms swept through Colorado on Sunday ',
    );
  });
});
