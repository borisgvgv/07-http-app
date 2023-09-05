import { localhostUserToModel } from '../mappers/localhost-user-mapper';
import { User } from '../models/user'; // se importa solo para que ayude con la documentación

/**
 *
 * @param {Number} page
 * @returns {Promise<User[]>} return
 */
export const loadUsersByPage = async (page = 1) => {
  const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
  const res = await fetch(url); // "fetch" función para realizar una solicitud HTTP GET a la URL construida y espera la respuesta.
  const data = await res.json();

  const users = data.map((userLike) => localhostUserToModel(userLike)); // .map barre los usuarios que tengo en la data
  // console.log(users);
  return users;
};
