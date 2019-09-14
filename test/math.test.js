var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var napsinat = require('../src/napsinat');


//Math.base()
describe('Test the behaviour of Math.base()',function(){
  expect('n').to.be.a('number');
  expect('b').to.be.a('number');
  it('should return 0 when given no arguments', function() {
    assert.deepEqual(Math.base(), 0);
  });
  it('should return the number when given the number but no base', function() {
    assert.deepEqual(Math.base(5,), 5);
  });
  it('should return a binary when given Math.base(n,2) ', function() {
    assert.deepEqual(Math.base(1,2), "1");
    assert.deepEqual(Math.base(4,2), "100");
    assert.deepEqual(Math.base(10,2), "1010");
  });

})


//Math.rangeSum()
describe('Test the behaviour of Math.rangeSum()', function() {
  it('should return 6 when given Math.rangeSum(1,3)', function() {
    assert.deepEqual(Math.rangeSum(1,3), 6);
  });
  it('should return 15 when given Math.rangeSum(6,4)', function() {
    assert.deepEqual(Math.rangeSum(6,4), 15);
  });
  it('should return 6 when given Math.rangeSum(3)', function() {
    assert.deepEqual(Math.rangeSum(3), 6);
  }); 
  
});
