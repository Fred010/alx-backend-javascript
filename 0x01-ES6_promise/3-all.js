// Importing the required functions from utils.js
import { uploadPhoto, createUser } from './utils';

/**
 * Collectively resolves promises from uploadPhoto and createUser functions.
 * In case of successful resolution -> Logs firstName and lastName to the console
 * In case of error -> Logs 'Signup system offline'
 */
export default function handleProfileSignup() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then((res) => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
