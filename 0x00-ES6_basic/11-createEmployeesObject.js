/**
 * Creates a department object with its employees.
 *
 * @param {string} departmentName
 * @param {Array<string>} employees
 * @returns {Object} - department name as the key and employee array as the value.
 */
export default function createEmployeesObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
