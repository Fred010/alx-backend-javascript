/**
 * Takes an iterator that goes through employees and returns a string of
 * all names separated by a vertical bar.
 * @param {Iterator} reportWithIterator
 * @returns {string} - string repr. of all employee names separated by '|'.
 */
export default function iterateThroughObject(reportWithIterator) {
  const result = [];

  for (const name of reportWithIterator) {
    result.push(name);
  }

  return result.join(' | ');
}
