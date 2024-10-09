// 1-get_list_student_ids.js -> function that extracts and returns student IDs
// from an array of student objects.
// It returns an empty array if the input is not an array of objects.

/**
 * getListStudentIds - returns an array of student IDs from the given array
 *
 * @param {Array} students An array of student objects,
 * each object containing an 'id'.
 * @return {Array} An array of integers representing student IDs,
 * or an empty array if input is invalid.
 */
export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((student) => student.id);
}
