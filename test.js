'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var flatten = require('./')

/*!
 * setup.
 */

var original = [1, [[[2, [[3, 4]], 5], 6]], [7], [[[8]]], 9]
var expected = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*!
 * tests.
 */

test('flatten()', function (t) {
  t.deepEqual(flatten(original), expected)
  t.end()
})
