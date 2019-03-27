/*Splits a list into two arrays: one whose elements all satisfy predicate and one whose elements all do not satisfy predicate. */

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


