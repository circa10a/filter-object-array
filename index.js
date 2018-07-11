const _ = require('underscore');

/**
 * @author Caleb Lemoine
 * @param {Object} params [Required] (array: <array>) Array of objects to filter, [Required] (objFilter: <object>) Object to filter with, [Optional] (ignoreDataType: <boolean>) Specify if data type should match
 * @promise [results]
 * @reject {error}
 * @fulfill [results]
 * @returns {Promise.<array, Error>} Promise that returns array of filtered objects if resolved or error if rejected // eslint-disable-line
 */

module.exports = function filterObjectArray(params = {}) {
  return new Promise((resolve) => {
    // Convert all values data types as string
    if (params.ignoreDataType) {
      const newArr = params.array.map(item => _.mapObject(item, val => val.toString()));
      // Ensure data/json brought in to only have strings for values
      const modifiedFilters = _.mapObject(params.objFilter, val => val.toString());
      // Filter
      const results = _.filter(newArr, modifiedFilters);
      resolve(results);
    // Match data types
    } else {
      const results = _.filter(params.array, params.objFilter);
      resolve(results);
    }
  });
};
