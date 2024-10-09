/**
 * Class representing a Car.
 */
export default class Car {
  /**
   * Create a Car.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Get the brand of the car.
   * @returns {string} The brand of the car.
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the brand of the car.
   * @param {string} value - The brand to set.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Get the motor of the car.
   * @returns {string} The motor of the car.
   */
  get motor() {
    return this._motor;
  }

  /**
   * Set the motor of the car.
   * @param {string} value - The motor to set.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Get the color of the car.
   * @returns {string} The color of the car.
   */
  get color() {
    return this._color;
  }

  /**
   * Set the color of the car.
   * @param {string} value - The color to set.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Get the species symbol for cloning.
   * @returns {Function} The species constructor.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clone the car.
   * @returns {Car} A new instance of the car class.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
