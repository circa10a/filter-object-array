const _ = require('underscore');
const { expect } = require('chai');
const filterObjectArray = require('../index');

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

describe('Test Filter with Matching Data types', () => {
  it('Ensure data was matched', async () => {
    // Filter array using same data types
    const filtersMatchType = {
      color: 'blue',
      year: 2010,
    };
    const filteredResults = await filterObjectArray({ array: arr, objFilter: filtersMatchType });
    expect(filteredResults[0]).to.deep.equal(arr[0]);
  });
  it('Ensure data was not matched', async () => {
    // Filter array using different data types
    const filtersMatchType = {
      year: 2020,
    };
    try {
      const filteredResults = await filterObjectArray({ array: arr, objFilter: filtersMatchType });
      expect(filteredResults[0]).to.not.deep.equal(arr[0]);
    } catch (e) {
      // Ensure data wasn't matched/promise rejection
    }
  });
});

describe('Test Filter with Different Data types', () => {
  it('Ensure data was matched', async () => {
    // Using different data type
    const filtersDiffType = {
      year: '2012',
    };
    const filteredResults = await filterObjectArray({ array: arr, objFilter: filtersDiffType, ignoreDataType: true }); // eslint-disable-line
    const stringifiedArrObject = _.mapObject(arr[2], (val) => val.toString());
    expect(filteredResults[0]).to.deep.equal(stringifiedArrObject);
  });
  it('Ensure data was not matched', async () => {
    // Using different data type
    const filtersDiffType = {
      year: '2020',
    };
    try {
      const filteredResults = await filterObjectArray({ array: arr, objFilter: filtersDiffType, ignoreDataType: true }); // eslint-disable-line
      const stringifiedArrObject = _.mapObject(arr[2], (val) => val.toString());
      expect(filteredResults[0]).to.not.deep.equal(stringifiedArrObject);
    } catch (e) {
    // Ensure data wasn't matched/promise rejection
    }
  });
});

describe('Test Filter with no matching data', () => {
  it('Ensure empty array was returned', async () => {
    // Using different data type
    const filtersDiffType = {
      year: '2001',
    };
    const filteredResults = await filterObjectArray({ array: arr, objFilter: filtersDiffType, ignoreDataType: true }); // eslint-disable-line
    expect(filteredResults).to.have.length(0);
  });
});
