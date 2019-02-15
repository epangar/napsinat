var expect = require("chai").expect;
var should = require("chai").should();
var unique = require("../Methods/Array/unique/unique").unique

describe("Test the behaviour of unique()", function(){
    it("should return [1,2,3] when given [1,2,3,1,2,3,1,2,3] via expect()", function(){
        expect([1,2,3,1,2,3,1,2,3].unique()).to.be.equal([1,2,3]);
    })
    it("should not return [1,2,3,1,2,3] when given [1,2,3,1,2,3,1,2,3] via expect()", function(){
        [1,2,3,1,2,3,1,2,3].unique().should.not.be.equal([1,2,3,1,2,3]);
    })
})