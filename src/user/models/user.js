/* este clase la creo para saber como quiero recibir los datos de mi usuario 
independientemente de como esten creados en el backend*/

export class User {
  /**
   *
   * @param {Like<User>} userDataLike
   */
  constructor({ id, isActive, balance, avatar, firstName, lastName, gender }) {
    this.id = id;
    this.isActive = isActive;
    this.balance = balance;
    this.avatar = avatar;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
  }
}
