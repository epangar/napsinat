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
        }
        
        
        var allKeys=(Object.values(obj)), firstKey=(Object.values(obj))[0]
        for(j in firstKey){
            var value=firstKey[j];

            if(allKeys.every(function(arr){return arr.includes(value)===true})){
                return value
            } else {
                continue
            }
        }
        return obj;
    }
}

var n=Math.GCD([100,20,2000,5200])
console.log(n)

var n=Math.GCD(100,20,2000,5200)
console.log(n)