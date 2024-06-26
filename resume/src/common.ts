import { Profile } from './types';

export const meta = {
  version: 'v1.0.0',
  lastModified: new Date(),
};

export const profiles: { [key: string]: Profile } = {
  linkedin: {
    network: 'LinkedIn',
    username: 'sergei-chukh',
    url: 'https://www.linkedin.com/in/sergei-chukh',
  },
  telegram: {
    network: 'Telegram',
    username: 'schukh',
    url: 'https://t.me/schukh',
  },
  github: {
    network: 'GitHub',
    username: 'spigell',
    url: 'https://github.com/spigell',
  },
};
