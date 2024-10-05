/**
 * Function to safely execute a math function and capture the result or errors.
 * @param {Function} mathFunction - A function that performs a mathematical operation.
 * @returns {Array} - containing the result or error message, and a processing message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    queue.push(`Error: ${error.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
