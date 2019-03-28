Math.bases=function(number){

    var bases=[2,8,10,16], obj = {};

    for(i in bases){
        var key=bases[i];
        obj[key]=number.toString(key);
    }

    return obj;

}

console.log(Math.bases(4))