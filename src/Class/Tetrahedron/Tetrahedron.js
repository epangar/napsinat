class Tetrahedron{
  constructor(side){
    this.side=side;
  }

  height(){
    return this.side*Math.sqrt(2/3);
  }

  surfaceArea(){
    return Math.sqrt(3)*Math.pow(this.side,2);
  }
}