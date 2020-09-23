import {formatDate, getIsExpired} from '../helpers/common';
import { PRIORITIES } from '../consts';

const getPriorityTemplate = (taskId, priority, isChecked = false) => {
  const checkedAttribute = isChecked ? 'checked' : '';

  return `
    <li class="
      priorities__priority
      priorities__priority--${priority}"
    >
      <input
        class="visually-hidden"
        name="task-${taskId}-priority"
        id="task-${taskId}-priority-${priority}"
        type="radio"
        ${checkedAttribute}
      >
      <label
        for="task-${taskId}-priority-${priority}"
        aria-label="${priority} priority"
      ></label>
    </li>
  `;
};

const getPrioritiesTemplate = (taskId, currentPriority = PRIORITIES[0]) => {
  const prioritiesTemplate = PRIORITIES.map((priority) => {
    const isChecked = priority === currentPriority;

    return getPriorityTemplate(taskId, priority, isChecked);
  }).join('');

  return `
    <ul class="radio-buttons__list priorities">${prioritiesTemplate}</ul>
  `;
};

const getRepeatingDayTemplate = (taskId, day, isChecked = false) => {
  const checkedAttribute = isChecked ? 'checked' : '';

  return `
    <li class="weekdays__day">
      <input
        class="visually-hidden"
        name="task-${taskId}-weekday-${day}"
        id="task-${taskId}-weekday-${day}"
        type="checkbox"
        ${checkedAttribute}
      >
      <label for="task-${taskId}-weekday-${day}">${day}</label>
    </li>
  `;
};

const getRepeatingDaysTemplate = (taskId, repeatingDays) => {
  const repeatingDaysTemplate = Object.keys(repeatingDays).map((day) => {
    return getRepeatingDayTemplate(taskId, day, repeatingDays[day]);
  }).join('');

  return `
    <ul class="checkbox-buttons__list weekdays">
      ${repeatingDaysTemplate}
    </ul>
  `;
};

export const getTaskEditTemplate = (task) => {
  const {
    id,
    priority,
    title,
    description,
    dueDate,
    repeating
  } = task;

  const dateOutput = dueDate ? formatDate(dueDate) : '';
  const prioritiesTemplate = getPrioritiesTemplate(id, priority);
  const repeatingTemplate = getRepeatingDaysTemplate(id, repeating);
  const deadlineClassName = getIsExpired(dueDate) ? 'task--overdue' : '';

  return `
    <li class="tasks__task">
      <article
        class="task task--edit task--${priority} ${deadlineClassName}">
        <form class="task__form" action="#" id="task-${id}">
          <p class="task__priority" aria-label="${priority} priority"></p>
          <ul class="task__fields">
            <li class="input">
              <label for="task-${id}-title">Title</label>
              <input
                name="task-${id}-title"
                id="task-${id}-title"
                type="text"
                value="${title}"
              >
            </li>
            <li class="input">
              <label for="task-${id}-description">Description</label>
              <textarea
                name="task-${id}-description"
                id="task-${id}-description"
                rows="3"
              >${description}</textarea>
            </li>
            <li class="input input--date">
              <label for="task-${id}-date">Date</label>
              <input
                name="task-${id}-date"
                id="task-${id}-date"
                type="text"
                value="${dateOutput}"
              >
            </li>
            <li>
              <fieldset class="checkbox-buttons">
                <legend class="checkbox-buttons__title">
                  Repeating days
                </legend>
                ${repeatingTemplate}
              </fieldset>
            </li>
            <li>
              <fieldset class="radio-buttons">
                <legend class="radio-buttons__title">
                  Priority
                </legend>
                ${prioritiesTemplate}
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
    </li>
  `;
};
