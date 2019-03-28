Number.prototype.bases=function(){

    var bases=[2,8,10,16], obj = {};

    for(i in bases){
        var key=bases[i];
        obj[key]=this.toString(key);
    }

    return obj;

}
n=new Number(89)
console.log(n.bases(10))