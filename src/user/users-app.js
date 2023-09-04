import usersStore from './store/users-store';

/**
 *
 * @param {HTMLdivElement} element
 */
export const UsersApp = async (element) => {
  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();

  console.log(usersStore.getUsers());
};