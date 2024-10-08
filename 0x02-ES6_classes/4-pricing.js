/**
 * Pricing class represents a price with an amount and currency.
 */
export default class Pricing {
  /**
   * Creates an instance of Pricing.
   * @param {number} amount - The price amount.
   * @param {Currency} currency - The currency of the price.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Getter for the price amount.
   * @returns {number} The price amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Setter for the price amount.
   * @param {number} newAmount - The new price amount.
   */
  set amount(newAmount) {
    this._amount = newAmount;
  }

  /**
   * Getter for the currency.
   * @returns {Currency} The currency of the price.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Setter for the currency.
   * @param {Currency} newCurrency - The new currency.
   */
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  /**
   * Displays the full price information.
   * @returns {string} The price information in the format: amount currency_name (currency_code).
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Converts the price amount using a conversion rate.
   * @param {number} amount - The price amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
