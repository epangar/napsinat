class Square{
    constructor(side){
        this.side=side;
    }

    area(){
        return Math.pow(this.side,2)
    }

    perimeter(){
        return this.side*4
    }

    diagonal(){
        return parseFloat((this.side*Math.sqrt(2)).toFixed(2))
    }
}

var x= new Square(1)
console.log(x.area(), x.perimeter(), x.diagonal())