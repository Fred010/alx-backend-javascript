/**
 * Currency class represents a currency with a code and name.
 */
export default class Currency {
  /**
   * Creates an instance of Currency.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Getter for the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for the currency code.
   * @param {string} newCode - The new currency code.
   */
  set code(newCode) {
    this._code = newCode;
  }

  /**
   * Getter for the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter for the currency name.
   * @param {string} newName - The new currency name.
   */
  set name(newName) {
    this._name = newName;
  }

  /**
   * Displays the full currency information.
   * @returns {string} The currency information in the format: name (code).
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
