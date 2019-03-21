/*Split list into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate. predicate is transformed through iteratee to facilitate shorthand syntaxes.*/

Array.prototype.partition=function(condition){
    var trueArray=[], falseArray=[];
    
    console.log(this)
    this.forEach(function(element){
        if(condition(element)){
            trueArray.push(element)
        } else {
            falseArray.push(element)
        }
    })

    return [trueArray,falseArray]
}

var x=[1,2,3,4,5].partition(function(e){return e%2===0})
console.log(x)
