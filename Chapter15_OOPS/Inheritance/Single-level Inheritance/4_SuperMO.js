class BaseTest{
    setUp(){
        console.log("Base : Open");
    }
    tearDown(){
        console.log("Base : Close");
    }
}

class APITest extends BaseTest{
    setUp(){
        super.setUp();
        console.log("API : Open");
        console.log("----------");
    }
    
    
    tearDown(){
        console.log("API : Close");
        super.tearDown();
    }
}

let api = new APITest();
api.setUp();
api.tearDown();