/**
 * Function to divide two numbers.
 * @param {Number} numerator - The numerator in the division.
 * @param {Number} denominator - The denominator in the division.
 * @returns {Number} - The result of the division.
 * @throws {Error} - Throws an error if the denominator is zero.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
