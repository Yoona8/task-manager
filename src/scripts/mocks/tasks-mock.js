const PRIORITIES = [
  'lowest',
  'low',
  'normal',
  'slightly-high',
  'high',
  'highest'
];

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

const getTask = () => {
  return {
    id: 0,
    title: TITLES[0],
    priority: PRIORITIES[0],
    description: DESCRIPTIONS[2],
    dueDate: null,
    repeating: {
      mo: false,
      tu: false,
      we: false,
      th: true,
      fr: false,
      sa: false,
      su: false
    },
    isFavorite: true,
    isArchive: true
  };
};

export const getTasks = (count) => {
  return new Array(count).fill('').map(getTask);
};
