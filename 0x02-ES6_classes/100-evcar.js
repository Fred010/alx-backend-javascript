import Car from './10-car';

/**
 * Class representing an Electric Vehicle Car.
 */
export default class EVCar extends Car {
  /**
   * Create an EVCar.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor of the car.
   * @param {string} color - The color of the car.
   * @param {string} range - The range of the car.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Get the range of the car.
   * @returns {string} The range of the car.
   */
  get range() {
    return this._range;
  }

  /**
   * Set the range of the car.
   * @param {string} value - The range to set.
   */
  set range(value) {
    this._range = value;
  }

  /**
* Clone the car. Returns an instance of Car.
* @returns {Car} A new instance of the Car class.
*/
  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
