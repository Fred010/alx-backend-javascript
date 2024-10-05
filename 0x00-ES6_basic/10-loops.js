/**
 * Appends a specified string to each value in an array.
 * @param {Array} input array
 * @param {string} appendString
 * @returns {Array} - modified values.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const value of array) {
    newArray.push(appendString + value);
  }
  return newArray;
}
