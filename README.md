# arr-fns

[![version](https://img.shields.io/npm/v/arr-fns.svg)](http://npm.im/arr-fns)
[![issues](https://img.shields.io/github/issues-raw/antoniovdlc/arr-fns.svg)](https://github.com/AntonioVdlC/arr-fns/issues)
[![downloads](https://img.shields.io/npm/dt/arr-fns.svg)](http://npm.im/arr-fns)
[![license](https://img.shields.io/npm/l/arr-fns.svg)](http://opensource.org/licenses/MIT)

Utility functions for arrays.

## Installation

This package is distributed via npm:

```
npm install arr-fns
```

## Motivation

This package encompasses other utility libraries around arrays, namely:
- [@antoniovdlc/reduce](https://www.npmjs.com/package/@antoniovdlc/reduce)
- [@antoniovdlc/sort](https://www.npmjs.com/package/@antoniovdlc/sort)

The goal is to have everything easily accessible and packaged in a single library.

## Usage

You can use this library either as an ES module or a CommonJS package:
```js
import { reduce, sort } from "arr-fns";
```
*- or -*
```js
const { reduce, sort } = require("arr-fns");
```

## Reduce functions

Here is a list of provided reduce functions:

### sum
Computes the sum of all the elements in an array.

### average
Computes the average of all the elements in an array.

### groupBy
Generates an object from an array of objects, where the keys correspond to the values of the first argument, and the value corresponds to the object itself.

## Sort functions

Here is a list of provided sort functions:

### alphabetically
Sorts an array in alphabetical (string) order. Case sensitive.

### alphabeticallyBase
Sorts an array in alphabetical (string) order. Case insensitive.

### chronologically
Sorts an array in chronological (date) order.

### numerically
Sorts an array in numerical (number) order.


> For more detailed usage (including examples) please check each library's documentation.

## License
MIT
