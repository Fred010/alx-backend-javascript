/**
 * Airport class represents an airport.
 */
export default class Airport {
  /**
   * Creates an instance of Airport.
   * @param {string} name - The name of the airport.
   * @param {string} code - The code of the airport.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Returns the default string description of the class.
   * @returns {string} The airport code.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
