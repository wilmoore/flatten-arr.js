'use strict'

var toString = Object.prototype.toString

/*!
 * exports.
 */

module.exports = flatten

/**
 * Flattens a nested array recursively.
 *
 * @param {Array} list
 * Nested array.
 *
 * @return {Array}
 * Flattened array.
 */

function flatten (list) {
  return concat(list, [])
}

/**
 * Recursive list item concatenation.
 *
 * @param {Array} nested
 * Nested array.
 *
 * @param {Array} flat
 * Initial/Flattended array.
 *
 * @return {Array}
 * Flattened array.
 */

function concat (nested, flat) {
  var end = nested.length
  var idx = -1

  while (++idx < end) {
    if (toString.call(nested[idx]) === '[object Array]') {
      concat(nested[idx], flat)
    } else {
      flat.push(nested[idx])
    }
  }

  return flat
}
