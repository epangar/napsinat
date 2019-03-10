class Cone{
    constructor(height, radius){
        this.height=height;
        this.radius=radius;
    }

    baseArea(){
        return Math.PI*Math.pow(this.radius,2)
    }

    slantHeight(){
        return Math.sqrt(Math.pow(this.height,2)+Math.pow(this.radius,2))
    }

    surface(){
        return Math.PI*this.radius*(this.radius+Math.sqrt(Math.pow(this.height,2)+Math.pow(this.radius,2)))
    }

    volume(){
        return (1/3)*Math.PI*Math.pow(this.radius,2)*this.height;
    }
}

