class Cylinder{
    constructor(height, radius){
        this.height=height;
        this.radius=radius;
    }

    baseArea(){
        return Math.PI*Math.pow(this.radius,2);
    }

    lateralSurface(){
        return 2*Math.PI*this.radius*this.height;
    }

    surface(){
        return (this.lateralSurface())+(2*this.baseArea())
    }

    volume(){
        return this.baseArea()*this.height;
    }
}

