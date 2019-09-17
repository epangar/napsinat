var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');
var napsinat = require('../src/napsinat');


//Math.base()
describe('Test the behaviour of Math.base()',() =>{
  it('should return 0 when given no arguments', () => {
    assert.deepEqual(Math.base(), 0);
  });
  it('should return the number when given the number but no base', () => {
    assert.deepEqual(Math.base(5,), 5);
  });
  it('should return a binary when given Math.base(n,2) ', () => {
    assert.deepEqual(Math.base(1,2), "1");
    assert.deepEqual(Math.base(4,2), "100");
    assert.deepEqual(Math.base(10,2), "1010");
  });

})

//Math.bases()
describe('Test the behaviour of Math.bases()',()=>{
  it('should return an object', ()=>{
    assert.deepEqual(Math.bases(1), { '2': '1', '8': '1', '10': '1', '16': '1' })
    assert.deepEqual(Math.bases(5), { '2': '101', '8': '5', '10': '5', '16': '5' })
    assert.deepEqual(Math.bases(19), { '2': '10011', '8': '23', '10': '19', '16': '13' })
    assert.deepEqual(Math.bases(60), { '2': '111100', '8': '74', '10': '60', '16': '3c' })
  })
})

//Math.bin()
describe('Test the behaviour of Math.bin()', ()=>{
  it('should return a string of n in base 2', ()=>{
    assert.deepEqual(Math.bin(0), "0");
    assert.deepEqual(Math.bin(1), "1");
    assert.deepEqual(Math.bin(2), "10");
    assert.deepEqual(Math.bin(3), "11");
  });
})

//Math.rangeSum()
describe('Test the behaviour of Math.rangeSum()', () => {
  it('should return 6 when given Math.rangeSum(1,3)', () => {
    assert.deepEqual(Math.rangeSum(1,3), 6);
  });
  it('should return 15 when given Math.rangeSum(6,4)', () => {
    assert.deepEqual(Math.rangeSum(6,4), 15);
  });
  it('should return 6 when given Math.rangeSum(3)', () => {
    assert.deepEqual(Math.rangeSum(3), 6);
  }); 
  
});
