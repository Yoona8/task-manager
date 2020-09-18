export const getTaskTemplate = (task) => {
  const { isArchive, isFavorite, priority, title, description } = task;
  const archiveClassName = isArchive ? 'task__control--active' : '';
  const favoriteClassName = isFavorite ? 'task__control--active' : '';

  return `
    <li class="tasks__task">
      <article class="task task--${priority}">
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
        <ul class="task__repeating">
          <li></li>
        </ul>
        <time class="task__deadline" datetime="2020-09-24T12:00">
          Sep 24, 12:00
        </time>
      </article>
    </li>
  `;
};
