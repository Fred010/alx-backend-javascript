/**
 * Output array with two boolean values based on the input parameter.
 * @param {Boolean}
 * @returns {Array}
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
