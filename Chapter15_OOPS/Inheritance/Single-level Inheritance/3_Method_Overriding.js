class BaseTest{
    setup(){
        console.log("Base Test")
    }
}

class APITest extends BaseTest{
    setup(){
        console.log("API Test") 
    }
}

let test = new APITest(); // whoever object is created, that method will be called
test.setup()