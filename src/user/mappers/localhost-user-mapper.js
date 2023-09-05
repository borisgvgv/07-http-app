// el mapper sirve para saber como viene la data del backend y generar una instancia basada en lo que necesito utilizar en mi app

import { User } from '../models/user';

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {newUser}
 */
export const localhostUserToModel = (localhostUser) => {
  const { id, isActive, balance, avatar, first_name, last_name, gender } =
    localhostUser;
  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender,
  });
};
