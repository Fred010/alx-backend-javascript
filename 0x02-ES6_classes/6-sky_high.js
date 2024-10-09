import Building from './5-building';

/**
 * SkyHighBuilding class represents a tall building with multiple floors.
 * Inherits from Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates an instance of SkyHighBuilding.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  /**
   * Getter for the number of floors.
   * @returns {number} The number of floors in the building.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Override the evacuationWarningMessage method.
   * Returns a string with the evacuation warning.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
