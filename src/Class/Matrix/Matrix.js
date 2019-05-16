class Matrix{
    constructor(initial, rows, columns, callback){
        this.initial=initial;
        this.rows=rows;
        this.columns=columns;
        this.callback=callback;
    }

    show(){
        var start=[];
        start[0]=[this.initial]

        for(var i=1;i<=this.columns;i++){
            start[0].push(this.callback(i))
        }

        // for(var j=0;j<this.rows;j++){
        //     var newRow=start[0].map(this.callback(j))
        //     start.push(newRow)
        // }

        return start
    }
}

var x= new Matrix(0, 3, 3, function(element){return element+5})
console.log(x)
console.log(x.show())