/**
 * Returns a promise rejecting with an Error indicating -> file cannot be processed.
 * @param {string} filename
 * @returns {Promise} A promise rejecting with an Error and the message .
 */
export default function uploadPhoto(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
}
