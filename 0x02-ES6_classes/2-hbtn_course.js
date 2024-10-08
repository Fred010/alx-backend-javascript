/**
   * Creates an instance of HolbertonCourse.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course.
   * @param {Array} students - The array of students.
   */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number' && !Number.isNaN(newLength)) {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = newStudents;
  }
}
