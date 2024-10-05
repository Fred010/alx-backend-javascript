/**
 * Creates an iterator that goes through every employee in every department
 * @param {Object} report
 * @returns {Iterator}
 */
export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  return allEmployees[Symbol.iterator]();
}
