//For a given number, returns an object with the values for the binary, octal, 
//decimal and hexadecimal bases. 

Math.bases=function(number){

    var bases=[2,8,10,16], obj = {};

    bases.forEach(function(base){
        obj[base]=number.toString(base);
    })

    return obj;

}

console.log(Math.bases(60))