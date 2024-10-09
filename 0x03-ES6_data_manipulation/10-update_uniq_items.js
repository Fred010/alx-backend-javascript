/**
 * Updates the quantity of items with initial quantity at 1 to 100 in the provided map.
 * @param {Map<String, Number>} map - The map containing items and their quantities.
 * @returns {void}
 * @throws {Error} If the argument is not a map.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of map) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }
}
