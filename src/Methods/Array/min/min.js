//Returns the element with the lowest  value of a given array

Array.prototype.min=function(){

    return this.sort(function(a,b){
                    return a-b
                    })[0]
}