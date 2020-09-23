import { PRIORITIES } from '../consts';

const TITLES = [
  'Clean the floor',
  'Read an article',
  'Edit a video',
  'Groceries shopping',
  'Cook some cookies',
  'Read a book'
];

const DESCRIPTIONS = [
  'Default task with default options selected on creation.',
  'Make a list of things to buy. Add the list to the phone.',
  'Read and make some notes on useful parts or parts to recreate.',
  'Write a review and fill the prompts on the book club page.'
];

const getRandomItemFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomIntegerNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomDate = (range = 7000) => {
  const isDate = getRandomBoolean();

  if (!isDate) {
    return null;
  }

  const diff = getRandomIntegerNumber(-range, range);
  const targetDate = new Date();

  targetDate.setMinutes(targetDate.getMinutes() + diff);

  return targetDate;
};

const getTask = () => {
  return {
    id: String(new Date().getMilliseconds() + Math.random()),
    title: getRandomItemFromArray(TITLES),
    priority: getRandomItemFromArray(PRIORITIES),
    description: getRandomItemFromArray(DESCRIPTIONS),
    dueDate: getRandomDate(),
    repeating: {
      mo: getRandomBoolean(),
      tu: false,
      we: false,
      th: getRandomBoolean(),
      fr: false,
      sa: false,
      su: false
    },
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };
};

export const getTasks = (count) => {
  return new Array(count).fill('').map(getTask);
};
