/**
 * Checks if all elements from the array are present in the provided set.
 *
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array of elements to find in the set.
 * @returns {boolean} True if all elements from the array are found in the set,
 * otherwise false.
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
