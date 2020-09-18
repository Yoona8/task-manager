import { getMenuTemplate } from './components/menu-component';
import { getFiltersTemplate } from './components/filters-component';
import { getSortingTemplate } from './components/sorting-component';
import { getTasksTemplate } from './components/tasks-component';
import { getTaskTemplate } from './components/task-component';
import { getTaskEditTemplate } from './components/task-edit-component';
import { getLoadMoreTemplate } from './components/load-more-component';

const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

render(headerElement, getMenuTemplate());

const filtersContainerElement = mainElement
  .querySelector('.main__filters');

render(filtersContainerElement, getFiltersTemplate());

const boardElement = mainElement.querySelector('.board');

render(boardElement, getSortingTemplate());
render(boardElement, getTasksTemplate());
render(boardElement, getLoadMoreTemplate());

const tasksElement = boardElement.querySelector('.tasks');

render(tasksElement, getTaskEditTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
