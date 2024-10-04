/**
 * Output array with two boolean values based on the input parameter.
 * @param {Boolean}
 * @returns {Array}
 */
export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
