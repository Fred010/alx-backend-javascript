/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String} - The joined string.
 */
export default function cleanSet(set, startString) {
  // Check if set is a valid Set and startString is a string
  if (!(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const result = [];

  // Iterate over each value in the set
  for (const value of set) {
    // Check if the value starts with the startString
    if (value.startsWith(startString)) {
      // Strip the startString from the beginning of the value
      const strippedValue = value.slice(startString.length);
      // Add the stripped value to the result array
      result.push(strippedValue);
    }
  }

  // Join the result array with dashes and return the result
  return result.join('-');
}
