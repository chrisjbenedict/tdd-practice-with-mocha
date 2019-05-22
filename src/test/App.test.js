import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
// var assert = require('chai').assert;
// var expect = require('chai').expect;
var should = require('chai').should();
var { assert, expect } = require('chai')
var C = require('../cash.js');
var A = require('../anagram.js');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

let numbers = [1, 2, 3, 4, 5];

// Assert

assert.isArray(numbers, 'is array of numnbers');
assert.include(numbers, 2, 'array contains 2');
assert.lengthOf(numbers, 5, 'array contains 5 numbers');

//Expect

expect(numbers).to.be.an('array').that.includes(2);
expect(numbers).to.have.lengthOf(5);

// Should

numbers.should.be.an('array').that.includes(2);
numbers.should.have.lengthOf(5);



describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(-1, [1,2,3].indexOf(4));
    })
  })
})

describe('Cash Register', () => {
  describe('Module C', () => {
    it('should have a getChange Method', () => {
      assert.equal(typeof C, 'object');
      assert.equal(typeof C.getChange, 'function');
    })

    it('getChange(210,300) should equal [50,20,20]', () => {
      assert.deepEqual(C.getChange(210,300), [50, 20, 20]);
    })

    it('getChange(486,1000) should equal [500, 10, 2, 2]', () => {
      assert.deepEqual(C.getChange(486,1000), [500, 10, 2, 2]);
    })

    it('getChange(1487,10000) should equal [5000, 2000, 1000, 500, 10, 2, 1]', () => {
      assert.deepEqual(C.getChange(1487, 10000), [5000,2000,1000,500,10,2,1]);
    })
  })
})

describe('Anagram Tester', () => {
  describe('Module A', () => {
    it('should have an isAnagram Method', () => {
      assert.equal(typeof A, 'object');
      assert.equal(typeof A.isAnagram, 'function');
    })

    it('isAnagram(silent, loud) should be false', () => {
      assert.equal(A.isAnagram('silent', 'loud'), false);
    })

    it('isAnagram(hotdog, hamburger) should be false', () => {
      assert.equal(A.isAnagram('hotdog', 'hamburger'), false);
    })

    it('isAnagram(silent, listen) should be true', () => {
      assert.equal(A.isAnagram('silent', 'listen'), true);
    })

    it('isAnagram(cinema, iceman) should be true', () => {
      assert.equal(A.isAnagram('cinema', 'iceman'), true);
    })
  })
})
