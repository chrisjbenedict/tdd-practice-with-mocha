import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var assert = require('assert');
var C = require('./cash.js')

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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
