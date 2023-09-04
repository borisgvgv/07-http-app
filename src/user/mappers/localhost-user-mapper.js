import { User } from '../models/user';

/**
 *
 * @param {Like<User>} localhostUser
 * @returns {newUser}
 */
export const localhostUserToModel = (localhostUser) => {
  const { id, isActive, balance, avatar, first_name, last_name } =
    localhostUser;
  return new User({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
  });
};
