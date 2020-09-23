import { formatDate } from '../helpers/common';
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

  return `
    <li class="tasks__task">
      <article class="task task--edit task--${priority}">
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
