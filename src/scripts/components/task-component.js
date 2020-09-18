export const getTaskTemplate = () => {
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
