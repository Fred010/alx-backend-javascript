/**
 * Updates the grades of students filtered by a specific city with new grade data.
 * With grades not specified in the newGrades array set to 'N/A'.
 *
 * @param {Array} listOfStudents - An array of student objects where each object
 *                                 contains details like id, firstName, location, etc.
 * @param {string} city - The city based on which to filter the students.
 * @param {Array} newGrades - An array of objects that include `studentId` and `grade`
 *                            properties, used to update student grades.
 * @returns {Array} An array of student objects from the specified city with updated
 *                  grades. If no new grade is found for a student, their grade is set to 'N/A'.
 */
export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  return listOfStudents.filter((student) => student.location === city)
    .map((student) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeInfo ? gradeInfo.grade : 'N/A',
      };
    });
}
