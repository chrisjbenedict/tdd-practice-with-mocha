var sum = require('../sum.js');
var expect = require('chai').expect;

describe('#sum()', () => {
  it('without arguments, should return 0', () => {
    expect(sum()).to.equal(0)
  })

  it('with number args, should reutnr sum of arguments', () => {
    expect(sum(1,2,3,4,5)).to.equal(15)
  })

  it('with non-num args, should throw error', () => {
    expect(()=> {
      sum(1, 2, '3', [4], 5)}).to.throw(TypeError, 'sum() expects only numbers.')
  })

})
