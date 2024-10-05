/**
 * Creates a report object with a list of all employees grouped by department
 * @param {Object} employeesList
 * @returns {Object} A report object with department and employee count
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(deptObject) {
      return Object.keys(deptObject).length;
    },
  };
}
