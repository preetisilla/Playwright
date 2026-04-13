class Animal{
    constructor(name){
        this.name = name;
    }

    eat(){
        console.log(this.name + " Eating")
    }

    Sleep(){
        console.log(this.name + " sleeping")
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }

    bark(){
        console.log(this.name +" Barking")
    }
}

let dog = new Dog("Cosmo","Labrodor");
dog.Sleep();
dog.eat();
dog.bark();
console.log(dog.breed);