class Circle{
    constructor(radius){
        this.radius=radius;
    }

    area(){
        var areaValue=Math.PI*Math.pow(this.radius,2)
        return parseFloat(areaValue.toFixed(2))
    }

    perimeter(){
        var perimeterValue=2*Math.PI*this.radius;
        return parseFloat(perimeterValue.toFixed(2))
    }
}