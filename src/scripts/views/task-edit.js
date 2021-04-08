const getTaskEditTemplate = () => {
  return `
    <li class="tasks__task">
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
    </li>
  `;
};

export {getTaskEditTemplate};
