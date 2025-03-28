import { Profile } from './types';

export type Name = 'Sergei Chukh' | 'Сергей Чух';

export const website = 'https://sergeichukh.cloud';
export const email = 'spigelly@gmail.com';

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
