let A = {}

A.isAnagram = function(s1, s2) {
  'use strict';
  return s1.split('').sort().join('') === s2.split('').sort().join('')
}

module.exports = A;
