/**
 * HolbertonClass class represents a Holberton class.
 */
export default class HolbertonClass {
  /**
   * Creates an instance of HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Converts the class into a number.
   * @returns {number} The size of the class.
   */
  valueOf() {
    return this._size;
  }

  /**
   * Converts the class into a string.
   * @returns {string} The location of the class.
   */
  toString() {
    return this._location;
  }
}
