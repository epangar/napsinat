//Applies the reduce() method to an array starting from last to first element

Array.prototype.reduceRight=function(callback){
    return this.map(function(element){return element}).reverse().reduce(callback)
}