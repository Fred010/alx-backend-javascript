// 3-get_ids_sum.js  defines a function that calculates
// the sum of all student IDs from an array of student objects.
// It utilizes the Array.prototype.reduce method to accumulate the sum.

/**
 * getStudentIdsSum - returns the sum of all
 * student IDs from a given array of student objects.
 *
 * @param {Array} students An array of student objects,
 *  each object containing an 'id'.
 * @return {Number} The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  return students.reduce((sum, student) => sum + student.id, 0);
}
