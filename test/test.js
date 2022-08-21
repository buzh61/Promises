import GameSaving from '../src/js/GameSaving';
import GameSavingLoader from '../src/js/GameSavingLoader';
import read from '../src/js/reader';
import json from '../src/js/parser';

describe('GameSaving', () => {
  const cases = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };

  test('to equal obj returned', () => {
    expect(new GameSaving(cases)).toEqual(cases);
  });
});

describe('GameSavingLoader', () => {
  test('Должен возвращаться объект', async () => {
    const caseObj = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    expect(GameSavingLoader.load()).resolves.toEqual(caseObj);
  });
});

describe('json function: ', () => {
  const jsonCase = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  test('Должен возвращаться JSON из arrayBufer', async () => {
    const buffer = await read();
    const jsonTest = await json(buffer);
    await expect(jsonTest).toBe(jsonCase);
  });
});
