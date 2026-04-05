class TestCase{
    constructor(name,status,priority){
        this.name = name; // attribute of the class
        this.status = status;
        this.priority = priority;
    }

    display(){ //method is function inside the class
        console.log(this.name + "->" + this.status + " " + this.priority)
    }
}

let loginTest = new TestCase("Login Test","Pass","P0");
loginTest.display();