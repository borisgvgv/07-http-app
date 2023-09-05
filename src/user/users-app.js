import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/usersStore';

/**
 *
 * @param {HTMLdivElement} element
 */
export const UsersApp = async (element) => {
  // element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  // element.innerHTML = 'Loading...';

  // console.log(usersStore.getUsers());
  renderTable(element);
};
