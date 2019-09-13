//Returns the n position of an array. If n is either smaller or bigger than the array's length, it returns

Array.prototype.pos=function(n){
    console.log(this, this[n], this.length)
    return !n ? this 
            : ( (n >= 0 && n <= this.length) ? this[n] 
                                            : ( n<0 ? this[0] : this[this.length-1]) )
}