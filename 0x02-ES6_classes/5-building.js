/**
 * Building class represents a building with square footage.
 * This is an abstract class.
 */
export default class Building {
  /**
   * Creates an instance of Building.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this._sqft = sqft;
  }

  /**
   * Getter for the square footage.
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method that must be implemented by subclasses.
   * Throws an error if not overridden.
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
