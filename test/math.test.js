var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var napsinat = require('../src/napsinat');

//Math.rangeSum()
describe('Test the behaviour of Math.rangeSum()', function() {
  it('should return 6 when given Math.rangeSum(1,3)', function() {
    assert.deepEqual(Math.rangeSum(1,3), 6);
    
  });
  it('should return 15 when given Math.rangeSum(6,4)', function() {
    assert.deepEqual(Math.rangeSum(6,4), 15);
  });
  /* it('should return [ 1, 2, "a", "G", 5, 77 ] when given [1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77]', function() {
    
  }); */
  
});
