//Returns a random element from an array

Array.prototype.rand=function(){
    return this[Math.floor(Math.random()*this.length)]
}

for(i=0;i<100;i++){
    console.log([1,2,3,4,5].rand())
}