//Returns the element with the highest value of a given array

Array.prototype.max=function(){
    return this.sort(function(a,b){
                    return a-b
                    })[this.length-1]
}

