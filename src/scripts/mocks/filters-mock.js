import {FilterType} from '../consts';

const getAllTasks = (tasks) => {
  return tasks;
};

const getArchivedTasks = (tasks) => {
  return tasks;
};

const getTodayTasks = (tasks) => {
  return tasks;
};

const getFavoriteTasks = (tasks) => {
  return tasks;
};

const getOverdueTasks = (tasks) => {
  return tasks;
};

const getRepeatingTasks = (tasks) => {
  return tasks;
};

const filterToFilterFunction = {
  [FilterType.ALL]: getAllTasks,
  [FilterType.ARCHIVE]: getArchivedTasks,
  [FilterType.TODAY]: getTodayTasks,
  [FilterType.FAVORITES]: getFavoriteTasks,
  [FilterType.OVERDUE]: getOverdueTasks,
  [FilterType.REPEATING]: getRepeatingTasks
};

export const getFilters = (tasks) => {
  return Object.keys(filterToFilterFunction).map((filterName) => {
    return {
      filterName,
      tasksCount: filterToFilterFunction[filterName](tasks).length
    };
  });
};
