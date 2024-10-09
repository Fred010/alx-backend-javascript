/**
 * Tracks the number of times queryAPI is called for each endpoint.
 */
export const weakMap = new WeakMap();

/**
 * Queries the API with the provided endpoint and tracks the number of calls.
 * @param {Object} endpoint - The endpoint object.
 * @param {string} endpoint.protocol - The protocol of the endpoint (e.g., 'http').
 * @param {string} endpoint.name - The name of the endpoint.
 * @throws {Error} If the number of queries for the endpoint is >= 5.
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    } else {
      weakMap.set(endpoint, count + 1);
    }
  }
}
