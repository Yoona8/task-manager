import { formatDate, getIsExpired } from '../helpers/common';

const getDateTemplate = (dueDate) => {
  return `
    <time class="task__deadline" datetime="${dueDate.toUTCString()}">
      ${formatDate(dueDate)}
    </time>
  `;
};

const getRepeatingDaysTemplate = (days) => {
  return `
    <ul class="task__repeating">
      ${days.map((day) => {
        return `<li>${day}</li>`;
      }).join('')}
    </ul>
  `;
};

export const getTaskTemplate = (task) => {
  const {
    isArchive,
    isFavorite,
    priority,
    title,
    description,
    dueDate,
    repeating
  } = task;

  const repeatingDays = Object.entries(repeating)
    .filter((item) => item[1])
    .map((item) => item[0]);

  const repeatingOutput = repeatingDays.length > 0
    ? getRepeatingDaysTemplate(repeatingDays)
    : '';
  const archiveClassName = isArchive ? 'task__control--active' : '';
  const favoriteClassName = isFavorite ? 'task__control--active' : '';
  const dateOutput = dueDate !== null ? getDateTemplate(dueDate) : '';
  const deadlineClassName = getIsExpired(dueDate) ? 'task--overdue' : '';

  return `
    <li class="tasks__task">
      <article class="task task--${priority} ${deadlineClassName}">
        <div class="task__controls">
          <button class="task__control">Edit</button>
          <button class="task__control ${favoriteClassName}">Favorite</button>
          <button class="task__control ${archiveClassName}">Archive</button>
        </div>
        <p
          class="task__priority"
          aria-label="${priority} priority"
        ></p>
        <h2 class="task__title">${title}</h2>
        <p class="task__description">${description}</p>
        ${repeatingOutput}
        ${dateOutput}
      </article>
    </li>
  `;
};
