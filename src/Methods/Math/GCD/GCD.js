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
        for(key in obj){
            var list= obj[key]
            list=list.reverse()

            for(n in key){

            }
        }
        return obj;
    }
}

var n=Math.GCD([5,10,25])
console.log(n)