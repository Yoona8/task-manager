import {getMenuTemplate} from './views/menu';
import {getFiltersTemplate} from './views/filters';
import {getSortingTemplate} from './views/sorting';
import {getTasksTemplate} from './views/tasks';
import {getLoadMoreButtonTemplate} from './views/load-more-button';
import {getTaskTemplate} from './views/task';
import {getTaskEditTemplate} from './views/task-edit';

const TasksCount = {
  ALL: 8,
  PER_STEP: 8
};

const tasks = new Array(TasksCount.ALL).fill('');

const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position, template);
};

const headerElement = document.querySelector('.header');

render(headerElement, getMenuTemplate());

const filtersElement = document.querySelector('.main__filters');

render(filtersElement, getFiltersTemplate());

const boardElement = document.querySelector('.board');

render(boardElement, getSortingTemplate());
render(boardElement, getTasksTemplate());
render(boardElement, getLoadMoreButtonTemplate());

const tasksElement = boardElement.querySelector('.tasks');

tasks.forEach(() => render(tasksElement, getTaskTemplate()));
