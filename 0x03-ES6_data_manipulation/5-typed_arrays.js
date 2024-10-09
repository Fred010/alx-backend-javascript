/**
 * Creates an ArrayBuffer and places an Int8 value at a specific position within the buffer.
 * Throws an error if the position is outside the allowable range of the buffer's length.
 *
 * @param {number} length - The total length of the ArrayBuffer.
 * @param {number} position - The position in the buffer where the Int8 value should be inserted.
 * @param {number} value - The Int8 value to be placed in the buffer.
 * @returns {DataView} A DataView representing the new buffer with the Int8 value set.
 * @throws {Error} Throws an error if the position is outside the range of the ArrayBuffer.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8View = new DataView(buffer);

  int8View.setInt8(position, value);

  return int8View;
}
