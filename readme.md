# flatten-arr
> Flattens a nested array recursively for Node.js and browsers.

[![Build Status](http://img.shields.io/travis/wilmoore/flatten-arr.js.svg)](https://travis-ci.org/wilmoore/flatten-arr.js) [![Code Climate](https://codeclimate.com/github/wilmoore/flatten-arr.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/flatten-arr.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install flatten-arr --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/flatten-arr.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/flatten-arr.svg)](https://www.npmjs.org/package/flatten-arr) [![NPM downloads](http://img.shields.io/npm/dm/flatten-arr.svg)](https://www.npmjs.org/package/flatten-arr) [![David](https://img.shields.io/david/wilmoore/flatten-arr.js.svg)](https://david-dm.org/wilmoore/flatten-arr.js)

## API Example

```js
var flatten = require('flatten-arr')

flatten([1, [[[2, [[3, 4]], 5], 6]], [7], [[[8]]], 9])
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## API

### `flatten(list)`

###### arguments

 - `list (array)` Nested array.

###### returns

 - `(array)` Flattened array.

## Inspriation

 - [lodash.flatten]
 - [flatten-array]
 - [arr-flatten]

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/flatten-arr.js.svg)](https://github.com/wilmoore/flatten-arr.js/blob/master/license)

[lodash.flatten]: https://lodash.com/docs#flatten
[flatten-array]: https://www.npmjs.com/package/flatten-array
[arr-flatten]: https://www.npmjs.com/package/arr-flatten
