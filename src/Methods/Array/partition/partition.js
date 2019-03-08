Array.prototype.partition=function(condition){
    var trueArray=[], falseArray=[];
    debugger
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
