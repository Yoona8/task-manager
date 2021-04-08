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

export {getFiltersTemplate};
