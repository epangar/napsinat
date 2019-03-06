class Cone{
    constructor(height, radius){
        this.height=height;
        this.radius=radius;
    }

    volume(){
        return (1/3)*Math.pi*Math.pow(this.radius,2)*this.height;
    }
}