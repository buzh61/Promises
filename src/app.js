import GameSavingLoader from './js/GameSavingLoader';

GameSavingLoader.load().then(
  (saving) => {
    console.log(saving);
  },
  (error) => {
    console.log('error', error.message);
  },
);
