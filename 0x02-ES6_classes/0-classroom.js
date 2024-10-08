/**
 * Class representing a classroom.
 */
export default class ClassRoom {
  /**
   * Create a classroom.
   * @param {number} maxStudentsSize -> private property
   * The maximum number of students allowed in the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
