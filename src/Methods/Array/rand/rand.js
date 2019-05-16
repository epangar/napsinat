//Returns a random element from an array

Array.prototype.rand=function(){
    return this[Math.floor(Math.random()*this.length)]
}