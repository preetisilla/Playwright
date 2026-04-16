interface TestCaseExec{
    (testName:string) : void //anonymous function with parameter testName string and return type void
}

let beforeHook : TestCaseExec = function(testName:string){
    console.log("Before hook of test")
}

let afterHook : TestCaseExec = function(testName:string){
    console.log("After hook of test")
}

beforeHook("Login Test");

//Actual test cases here

interface testCase{
    id : number;
    testName : string,
    status : string,
    duration : number
}

let test1 : testCase = {
    id :1,
    testName : "Login",
    status : "Pass",
    duration : 10
}

afterHook("Login Test")