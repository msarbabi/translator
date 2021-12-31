import randomUseragent from 'random-useragent';

export const URL = 'https://api.reverso.net/translate/v1/translation';
export const HEADERS = {
  Accept: '*/*',
  Connection: 'keep-alive',
  'User-Agent': randomUseragent.getRandom(),
  'Content-Type': 'application/json',
};

export const OPTIONS = {
  contextResults: true,
  languageDetection: true,
  origin: 'reversomobile',
  sentenceSplitter: false,
};
