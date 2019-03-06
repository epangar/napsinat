class Polygon {
    constructor(numberOfSides, lengthOfSide){
        this.numberOfSides=numberOfSides;
        this.lengthOfSide=lengthOfSide;
    }

    area(){
        return (Math.pow(this.lengthOfSide,2)*this.numberOfSides)/(4*(Math.tan(180/ this.numberOfSides)))
    }
}

