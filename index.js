const _ = require('underscore');

/**
 * @author Caleb Lemoine
 * @param {Array} arr Array of obects to filter
 * @param {Object} objFilter  Object containing filter criteria
 * @param {Object} params [Optional] Specify if data type should match
 * @promise [results]
 * @reject {error}
 * @fulfill [results]
 * @returns {Promise.<array, Error>} Promise that returns array of filtered objects if resolved or error if rejected // eslint-disable-line
 */

module.exports = function filterObjectArray(arr, objFilter, params) {
  return new Promise((resolve, reject) => {
    if (params) {
      // Convert all values data types as string
      if (params.ignoreDataType) {
        const newArr = arr.map(item => _.mapObject(item, val => val.toString()));
        // Ensure data/json brought in to only have strings for values
        const modifiedFilters = _.mapObject(objFilter, val => val.toString());
        // Filter
        const results = _.filter(newArr, modifiedFilters);
        // Ensure results were found
        if (results.length === 0) {
          reject(new Error('No matching objects found.'));
        } else {
          resolve(results);
        }
      }
    // Match data types
    } else {
      const results = _.filter(arr, objFilter);
      // Ensure results were found
      if (results.length === 0) {
        reject(new Error('No matching objects found.'));
      } else {
        resolve(results);
      }
    }
  });
};

