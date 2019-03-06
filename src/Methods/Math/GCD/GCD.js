var divisors = require("../divisors/divisors")

Math.GCD=function(input){
    

    if(input.length<2){
        return input[0]
    } else {
        var obj={}

        for(i in input){
            if(!obj[i]){
                obj[input[i]]=Math.divisors(input[i])
            } 
        }

        return obj;
    }
}

var n=Math.GCD([5,10])
console.log(n)