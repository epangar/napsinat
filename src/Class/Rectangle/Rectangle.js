class Rectangle{
    constructor(base,height){
        this.base=base;
        this.height=height;
    }

    area(){
        return this.base*this.height;
    }

    perimeter(){
        return (this.base*2)+(this.height*2)
    }

    diagonal(){
        return Math.sqrt(Math.pow(this.base,2)+Math.pow(this.height,2))
    }
}

