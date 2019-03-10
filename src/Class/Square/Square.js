class Square{
    constructor(side){
        this.side=side;
    }

    area(){
        return Math.pow(this.side,2)
    }

    diagonal(){
        return this.side*Math.sqrt(2)
    }

    perimeter(){
        return this.side*4
    }
}