// models/DeviceModel.js

class Device {
  /**
   * Constructor de la clase Device.
   * @param {number} id - ID del dispositivo.
   * @param {string} name - Nombre del dispositivo.
   * @param {string} type - Tipo de dispositivo.
   */
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  /**
   * Convierte el objeto Device a un formato JSON.
   * @returns {Object} - Objeto JSON que representa el dispositivo.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
    };
  }

  // Métodos adicionales según sea necesario

  /**
   * Obtiene el ID del dispositivo.
   * @returns {number} - ID del dispositivo.
   */
  getId() {
    return this.id;
  }

  /**
   * Establece el nombre del dispositivo.
   * @param {string} newName - Nuevo nombre del dispositivo.
   */
  setName(newName) {
    this.name = newName;
  }

  /**
   * Obtiene el tipo del dispositivo.
   * @returns {string} - Tipo del dispositivo.
   */
  getType() {
    return this.type;
  }

  /**
   * Establece el tipo del dispositivo.
   * @param {string} newType - Nuevo tipo del dispositivo.
   */
  setType(newType) {
    this.type = newType;
  }
}

module.exports = Device;
