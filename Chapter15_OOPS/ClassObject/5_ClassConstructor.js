//Constructor

class Car{
    constructor(value){
        this.name = value; // attribute of class Car
    }

    drive(){
        console.log("Drive the car" + this.name);
    }
}

let tesla = new Car(" tesla model v3");
tesla.drive();