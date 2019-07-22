class Cube {
    constructor(side){
        this.side=side;
    }

    spaceDiagonal(){
        return this.side*Math.sqrt(3)
    }

    surface(){
        return Math.pow(this.side,2)*6;
    }

    volume(){
        return Math.pow(this.side,3);
    }

}

