//Returns the area of a circle with a given radius

Math.circleArea=function(radius){
    var num =Math.PI*Math.pow(radius,2);
    return parseFloat(num.toFixed(2));
}