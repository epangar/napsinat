var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var napsinat = require('../src/napsinat');


//Array.prototype.unique()
describe('Test the behaviour of Array.prototype.unique()', function() {
  it('should return [1,2,3] when given [1,2,3,1,2,3,1,2,3]', function() {
    assert.deepEqual([1,2,3,1,2,3,1,2,3].unique()[0], 1);
    assert.deepEqual([1,2,3,1,2,3,1,2,3].unique()[1], 2);
    assert.deepEqual([1,2,3,1,2,3,1,2,3].unique()[2], 3);
  });
  it('should return [6,5,4] when given [6,5,5,5,5,5,5,5,5,5,5,5,4,6]', function() {
    assert.deepEqual([6,5,5,5,5,5,5,5,5,5,5,5,4,6].unique()[0], 6);
    assert.deepEqual([6,5,5,5,5,5,5,5,5,5,5,5,4,6].unique()[1], 5);
    assert.deepEqual([6,5,5,5,5,5,5,5,5,5,5,5,4,6].unique()[2], 4);
  });
  it('should return [ 1, 2, "a", "G", 5, 77 ] when given [1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77]', function() {
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[0], 1);
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[1], 2);
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[2], "a");
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[3], "G");
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[4], 5);
    assert.deepEqual([1,2,"a",1,2,"a",1,2,"G",1,2,2,2,2,5,"G",77,77,1,77,77].unique()[5], 77);
  });

  
});





