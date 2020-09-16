'use strict';

const getMenuTemplate = () => {
  return `
    <nav class="header__nav container">
      <a href="index.html" class="header__logo logo">TaskManager</a>
      <ul class="user-menu">
        <li>
          <a href="#">Add new task</a>
        </li>
      </ul>
      <ul class="header__menu menu">
        <li>
          <a href="#">Tasks</a>
        </li>
        <li>
          <a href="#">Statistics</a>
        </li>
      </ul>
    </nav>
  `;
};

const getFiltersTemplate = () => {
  return `
    <ul class="filters">
      <li>
        <button class="current" type="button">All 20</button>
      </li>
      <li>
        <button type="button" disabled>Overdue 20</button>
      </li>
      <li>
        <button type="button">Today 20</button>
      </li>
      <li>
        <button type="button">Repeating 20</button>
      </li>
      <li>
        <button type="button">Favorites 20</button>
      </li>
      <li>
        <button type="button">Archive 20</button>
      </li>
    </ul>
  `;
};

const render = (container, template, position = 'beforeend') => {
  container.insertAdjacentHTML(position, template);
};

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');

render(headerElement, getMenuTemplate());

const filtersContainerElement = mainElement
  .querySelector('.main__filters');

render(filtersContainerElement, getFiltersTemplate());
