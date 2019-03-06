Array.prototype.min=function(){
    return this.sort(function(a,b){
                    return a-b
                    })[this.length-1]
}

console.log([9,6,5,4,3,8,7,6,5,1,3,2].min())