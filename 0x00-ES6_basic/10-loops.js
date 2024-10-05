/**
 * Appends a specified string to each value in an array.
 * @param {Array} input array
 * @param {string} appendString
 * @returns {Array} - modified values.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value;
  }
  return array;
}
