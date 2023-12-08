// models/UserModel.js

class User {
  /**
   * Constructor de la clase User.
   * @param {number} id - ID del usuario.
   * @param {string} name - Nombre del usuario.
   * @param {string} email - Correo electrónico del usuario.
   */
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  /**
   * Convierte el objeto User a un formato JSON.
   * @returns {Object} - Objeto JSON que representa al usuario.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    };
  }

  // Métodos adicionales según sea necesario

  /**
   * Obtiene el ID del usuario.
   * @returns {number} - ID del usuario.
   */
  getId() {
    return this.id;
  }

  /**
   * Obtiene el nombre del usuario.
   * @returns {string} - Nombre del usuario.
   */
  getName() {
    return this.name;
  }

  /**
   * Establece el nombre del usuario.
   * @param {string} newName - Nuevo nombre del usuario.
   */
  setName(newName) {
    this.name = newName;
  }

  /**
   * Obtiene el correo electrónico del usuario.
   * @returns {string} - Correo electrónico del usuario.
   */
  getEmail() {
    return this.email;
  }

  /**
   * Establece el correo electrónico del usuario.
   * @param {string} newEmail - Nuevo correo electrónico del usuario.
   */
  setEmail(newEmail) {
    this.email = newEmail;
  }
}

module.exports = User;
