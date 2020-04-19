class Bird{

    constructor(private birdType:String){

    }

    setBirdType(birdType:string){
        this.birdType = birdType;
    }

}

let bird = new Bird('Parrot');
console.log(bird);