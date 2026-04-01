//CallBack Function
// A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows you to handle asynchronous operations or customize the behavior of a function.
function runTest(testName,callback){
    let result = "pass"; // Simulating a test result
    callback(testName, result); // Calling the callback function with test name and result
}

function onTestComplete(testName, result){
    console.log(`Test "${testName}" completed with result: ${result}`);
}
runTest("Login Test", onTestComplete); // Output: Test "Login Test" completed with result: pass