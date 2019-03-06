//Returns a random element from an array

Array.prototype.rand=function(){
    var n=Math.floor(Math.random()*this.length)
    return this[n]
}

