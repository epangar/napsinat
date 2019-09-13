Array.prototype.compareWith = function (input, deeply) {

    if (input.length !== this.length) {
        return false;
    } else {

        if (!deeply || deeply === false) {
            var copyThis = this.map(function (e) { return e }).sort(),
                copyInput = input.map(function (e) { return e }).sort()

            for (i in copyThis){
                if(copyThis[i]!==copyInput[i]){
                    return false
                }
            }

                return true
        } else {
            if(deeply=true){
                for(i in this){
                    if(this[i]!==input[i]){
                        return false
                    }
                }

                return true
            }
        }
    }

}

console.log( [1,2,3,4,5].compareWith([1,2,3,4,5]) )
console.log([1,2,3,4,5].compareWith([1,2,3,4,5], true) )
console.log([1,2,3,4,5].compareWith([2,1,3,4,5], false) )
console.log([1,2,3,4,5].compareWith([11,2,3,4,5]) )
console.log([1,2,3,4,5].compareWith([11,2,3,4,5], true) )
console.log([1,2,3,4,5].compareWith([11,2,3,4,5], false))