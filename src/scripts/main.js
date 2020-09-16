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

const getSortingTemplate = () => {
  return `
    <ul class="main__sorting sorting">
      <li>
        <a href="#">By default</a>
      </li>
      <li>
        <a href="#">By date up</a>
      </li>
      <li>
        <a href="#">By date down</a>
      </li>
    </ul>
  `;
};

const getTasksTemplate = () => {
  return `<ul class="main__tasks tasks"></ul>`;
};

const getTaskTemplate = () => {
  return `
    <li class="tasks__task">
      <article class="task task--lowest">
        <div class="task__controls">
          <button class="task__control">Edit</button>
          <button class="task__control">Favorite</button>
          <button class="task__control">Archive</button>
        </div>
        <p class="task__priority" aria-label="Lowest priority"></p>
        <h2 class="task__title">Title</h2>
        <p class="task__description">
          Default task with default options selected on creation.
        </p>
        <time class="task__deadline" datetime="2020-09-24T12:00">
          Sep 24, 12:00
        </time>
      </article>
    </li>
  `;
};

const getTaskEditTemplate = () => {
  return `
    <article class="task task--edit task--lowest">
      <form class="task__form" action="#" id="task-1">
        <p class="task__priority" aria-label="Lowest priority"></p>
        <ul class="task__fields">
          <li class="input">
            <label for="task-1-title">Title</label>
            <input name="task-1-title" id="task-1-title" type="text">
          </li>
          <li class="input">
            <label for="task-1-description">Description</label>
            <textarea
              name="task-1-description"
              id="task-1-description"
              rows="3"
            ></textarea>
          </li>
          <li class="input input--date">
            <label for="task-1-date">Date</label>
            <input name="task-1-date" id="task-1-date" type="text">
          </li>
          <li>
            <fieldset class="checkbox-buttons">
              <legend class="checkbox-buttons__title">
                Repeating days
              </legend>
              <ul class="checkbox-buttons__list weekdays">
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-mo"
                    id="task-1-weekday-mo"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-mo">Mo</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-tu"
                    id="task-1-weekday-tu"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-tu">Tu</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-we"
                    id="task-1-weekday-we"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-we">We</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-th"
                    id="task-1-weekday-th"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-th">Th</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-fr"
                    id="task-1-weekday-fr"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-fr">Fr</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-sa"
                    id="task-1-weekday-sa"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-sa">Sa</label>
                </li>
                <li class="weekdays__day">
                  <input
                    class="visually-hidden"
                    name="task-1-weekday-su"
                    id="task-1-weekday-su"
                    type="checkbox"
                  >
                  <label for="task-1-weekday-su">Su</label>
                </li>
              </ul>
            </fieldset>
          </li>
          <li>
            <fieldset class="radio-buttons">
              <legend class="radio-buttons__title">
                Priority
              </legend>
              <ul class="radio-buttons__list priorities">
                <li class="
                  priorities__priority
                  priorities__priority--lowest"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-6"
                    type="radio"
                    checked
                  >
                  <label
                    for="task-1-priority-6"
                    aria-label="Lowest priority"
                  ></label>
                </li>
                <li class="
                  priorities__priority
                  priorities__priority--low"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-5"
                    type="radio"
                  >
                  <label
                    for="task-1-priority-5"
                    aria-label="Low priority"
                  ></label>
                </li>
                <li class="
                  priorities__priority
                  priorities__priority--normal"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-4"
                    type="radio"
                  >
                  <label
                    for="task-1-priority-4"
                    aria-label="Normal priority"
                  ></label>
                </li>
                <li class="
                  priorities__priority
                  priorities__priority--slightly-high"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-3"
                    type="radio"
                  >
                  <label
                    for="task-1-priority-3"
                    aria-label="Slightly high priority"
                  ></label>
                </li>
                <li class="
                  priorities__priority
                  priorities__priority--high"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-2"
                    type="radio"
                  >
                  <label
                    for="task-1-priority-2"
                    aria-label="High priority"
                  ></label>
                </li>
                <li class="
                  priorities__priority
                  priorities__priority--highest"
                >
                  <input
                    class="visually-hidden"
                    name="task-1-priority"
                    id="task-1-priority-1"
                    type="radio"
                  >
                  <label
                    for="task-1-priority-1"
                    aria-label="Highest priority"
                  ></label>
                </li>
              </ul>
            </fieldset>
          </li>
        </ul>
        <p class="task__buttons">
          <button class="button button--light" type="button">
            Delete
          </button>
          <button class="button" type="submit">Save</button>
        </p>
      </form>
    </article>
  `;
};

const getLoadMoreTemplate = () => {
  return `
    <p class="board__load-more">
      <button class="button" type="button">Load more</button>
    </p>
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

const boardElement = mainElement.querySelector('.board');

render(boardElement, getSortingTemplate());
render(boardElement, getTasksTemplate());
render(boardElement, getLoadMoreTemplate());

const tasksElement = boardElement.querySelector('.tasks');

render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());
render(tasksElement, getTaskTemplate());

const firstTaskElement = tasksElement.querySelector('.tasks__task');

render(firstTaskElement, getTaskEditTemplate());
