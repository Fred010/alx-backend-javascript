/**
 * Converts an array into a Set, and removes any duplicate elements.
 * A Set automatically ensures that all elements are unique.
 *
 * @param {Array} array - The array from which to create the Set.
 * @returns {Set} A new Set containing the unique elements from the provided array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
