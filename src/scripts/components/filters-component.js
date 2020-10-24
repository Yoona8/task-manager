import {FilterType} from '../consts';

const getFilterTemplate = (filter, isChecked = false) => {
  const { filterName, tasksCount } = filter;
  const currentClassName = isChecked ? 'current' : '';

  return `
    <li>
      <button class="${currentClassName}" type="button">
        ${filterName} ${tasksCount}
      </button>
    </li>
  `;
};

export const getFiltersTemplate = (filters) => {
  const currentFilterName = FilterType.ALL;

  const filtersTemplate = filters.map((filter) => {
    const isChecked = filter.filterName === currentFilterName;
    return getFilterTemplate(filter, isChecked);
  }).join('');

  return `
    <ul class="filters">
      ${filtersTemplate}
    </ul>
  `;
};
