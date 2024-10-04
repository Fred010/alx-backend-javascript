/**
 * Outputs an budget object using object property value shorthand syntax.
 *
 * @param {number} income - income value.
 * @param {number} gdp - gdp value.
 * @param {number} capita - capita value.
 * @returns {Object} - budget object.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };
  return budget;
}
