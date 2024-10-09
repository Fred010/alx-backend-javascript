// 0-get_list_students.js -> function that returns a list of students.
// Each student is represented as an object with id, firstName, and location attributes.

/**
 * getListStudents - returns an array of objects, each representing a student.
 *
 * @return {Array} An array of student objects, each with id, firstName, and location.
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
}
