class Cube {
    constructor(side){
        this.side=side;
    }

    volume(){
        return Math.pow(this.side,3);
    }

    surface(){
        return Math.pow(this.side,2)*6;
    }
}

