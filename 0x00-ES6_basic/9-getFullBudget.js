/**
 * Outputs full budget object including methods to get income in dollars and euros.
 *
 * @param {number} income
 * @param {number} gdp
 * @param {number} capita
 * @returns {Object} - full budget object
 */
import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);

  return {
    ...budget,
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };
}
