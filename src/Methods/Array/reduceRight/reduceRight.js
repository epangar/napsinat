Array.prototype.reduceRight=function(callback){
    return this.map(function(element){return element}).reverse().reduce(callback)
}