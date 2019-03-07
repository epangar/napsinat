Array.prototype.partition=function(myFunction){
    var first=[], second=[];
    console.log(this)
    this.forEach(function(element){
        return myFunction(element)
    })
}

var x=[1,2,3,4,5].partition(function(e){return e+3})
console.log(x)
