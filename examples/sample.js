/* eslint-disable */
const filterObjectArray = require('filter-object-array');

const arr = [
  {
    car: 'toyota',
    color: 'blue',
    year: 2010,
    trans: 'auto',
    warrantyEnd: '2013',
  },
  {
    car: 'toyota',
    condition: 'good',
    color: 'green',
    year: 2010,
    trans: 'manual',
    warrantyEnd: '2013',
  },
  {
    car: 'ford',
    color: 'yellow',
    year: 2012,
    trans: 'auto',
    warrantyEnd: '2015',
  },
];
// Filter using same data types
const sameDataType = async () => {
  const filtersMatchType = {
    color: 'blue',
    year: 2010,
  };
  console.log(await filterObjectArray(arr, filtersMatchType));
};


// Filter array using different data types
const diffDataType = async () => {
  const filtersDiffType = {
    warrantyEnd: 2015,
  };
  console.log(await filterObjectArray(arr, filtersDiffType, { ignoreDataType: true }));
};

sameDataType();
/* [ { car: 'toyota',
    color: 'blue',
    year: 2010,
    trans: 'auto',
    warrantyEnd: '2013' } ] */

diffDataType();
/* [ { car: 'toyota',
    color: 'blue',
    year: 2010,
    trans: 'auto',
    warrantyEnd: '2013' } ] */
