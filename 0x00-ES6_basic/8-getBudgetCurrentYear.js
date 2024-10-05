/**
 * Outputs current year budget object
 *
 * @param {number} income
 * @param {number} gdp
 * @param {number} capita
 * @returns object - budget object
 */
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getCurrentYear()}`]: income,
    [`gdp-${getCurrentYear()}`]:
 gdp,
    [`capita-${getCurrentYear()}`]: capita,
  };

  return budget;
}
