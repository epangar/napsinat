var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var unique = require('../Methods/Array/unique/unique').unique;

describe('Test the behaviour of unique()', function() {
  it('should return [1,2,3] when given [1,2,3,1,2,3,1,2,3]', function() {
    assert.equal([1,2,3,1,2,3,1,2,3].unique()[0], 1);
    assert.equal([1,2,3,1,2,3,1,2,3].unique()[1], 2);
    assert.equal([1,2,3,1,2,3,1,2,3].unique()[2], 3);
  });
  
});
