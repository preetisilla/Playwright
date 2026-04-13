class BaseTest {
    execute(){
        console.log("Base Test")
    }
}

class UITest extends BaseTest{
    execute(){
        console.log("UI Test")
    }
}

class APITest extends BaseTest{
    execute(){
        console.log("API Test")
    }
}

class E2ETest extends BaseTest{
    execute(){
        console.log("E2E Test")
    }
}

let tests = [new UITest() , new APITest() , new E2ETest()]
for (const test of tests) {
    test.execute();
}