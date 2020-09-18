export const getMenuTemplate = () => {
  return `
    <nav class="header__nav container">
      <a href="#" class="header__logo logo">TaskManager</a>
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
