class Animal{
    constructor(numlegs, name , sound){
        this.numlegs =numlegs
        this.name =sound
        this.sound =name
    }
    static mytype(){
        console.log("i am animal")
    }
    speack () {
        console.log (this.sound);
        
    }
}
//we can access function without creating object beacuse it is static
Animal.mytype()

let dog =new Animal(4,"dog", "bhow")
dog.speack()