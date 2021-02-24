const PRIORITIES = [
  'lowest',
  'low',
  'normal',
  'slightly-high',
  'high',
  'highest'
];

const FilterType = {
  ALL: 'all',
  OVERDUE: 'overdue',
  TODAY: 'today',
  REPEATING: 'repeating',
  FAVORITES: 'favorites',
  ARCHIVE: 'archive'
};

const DateFormat = {
  VIEW: 'view',
  VALUE: 'value'
};

export { PRIORITIES, FilterType, DateFormat };
