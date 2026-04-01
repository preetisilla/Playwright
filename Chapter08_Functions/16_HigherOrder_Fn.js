// Higher order function
// function that takes another function as an argument or returns a function as a result
 
function runTests(testfn, testName)
{
    console.log(`Running test: ${testName}`);
    let result = testfn();
    console.log(`Test result: ${result}`);
    return result;
}
function loginTest(){
    return "Login successful";
}   
runTests(loginTest, "Login Test");
