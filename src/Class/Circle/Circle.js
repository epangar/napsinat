class Circle{
    constructor(radius){
        this.radius=radius;
    }

    area(){
        return Math.PI*Math.pow(this.radius,2);
    }

    diameter(){
        return this.radius*2;
    }
    
    perimeter(){
        return 2*Math.PI*this.radius;
    }
}