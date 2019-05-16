Number.prototype.bases=function(){
    var myNumber=Math.abs(this)
    
    var bases=[2,8,10,16], obj = {};
    
    bases.forEach(function(base){
        obj[base]=myNumber.toString(base);
    })

    return obj;

}
