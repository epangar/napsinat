class Sphere{
    constructor(radius){
        this.radius=radius;
    }

    diameter(){
        return this.radius*2;
    }

    surfaceArea(){
        return 4*Math.PI*Math.pow(this.radius,2);
    }

    volume(){
        return (4/3)*Math.PI*this.radius;
    }
}
