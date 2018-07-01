# filter-object-array

[![Travis](https://img.shields.io/travis/circa10a/filter-object-array.svg?style=flat-square)](https://travis-ci.org/circa10a/filter-object-array)
[![npm version](https://img.shields.io/npm/v/filter-object-array.svg?style=flat-square)](https://www.npmjs.com/package/filter-object-array)
[![npm downloads](https://img.shields.io/npm/dm/filter-object-array.svg?style=flat-square)](https://npm-stat.com/charts.html?package=filter-object-array&from=2018-03-29)
[![Dependencies status](https://img.shields.io/david/circa10a/filter-object-array.svg?style=flat-square)](https://david-dm.org/circa10a/filter-object-array#info=dependencies)
[![Dev Dependencies status](https://img.shields.io/david/dev/circa10a/filter-object-array.svg?style=flat-square)](https://david-dm.org/circa10a/filter-object-array?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/circa10a/filter-object-array/badge.svg?style=flat-square)](https://snyk.io/test/github/circa10a/filter-object-array?targetFile=package.json)
[![Coveralls Status](https://img.shields.io/coveralls/github/circa10a/filter-object-array.svg?style=flat-square)](https://coveralls.io/github/circa10a/filter-object-array)

[![NPM](https://nodei.co/npm/filter-object-array.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/filter-object-array)

A small library to make filtering array of objects easier

## Installation

```bash
npm install filter-object-array
```

## Requirements
  - Node.js >=7.6.0 (async/await support)

## Usage

```javascript
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
/* [ { car: 'ford',
    color: 'yellow',
    year: '2012',
    trans: 'auto',
    warrantyEnd: '2015' } ] */
```

## Tests

* [Example](https://github.com/circa10a/filter-object-array/tree/master/test)
