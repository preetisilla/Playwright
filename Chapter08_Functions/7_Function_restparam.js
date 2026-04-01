function logResults(suitename,...results) {
    console.log(`Test Suite: ${suitename}`);
    console.log(`Results: ${results.join(", ")}`);
}
logResults("Login Tests", "Passed", "Failed", "Passed");

greet("Preeti"); //hoisting - function declaration is hoisted to the top of the scope, so it can be called before its definition
function greet(name){
    console.log(`Hello, ${name}!`); 
}

//Expression / Arrow - no hoisting
//greet2("Preeti"); // Error: Cannot access 'greet2' before initialization
const greet2 = function(name) {
    console.log(`Hello, ${name}!`); 
}
greet2("Preeti"); // Output: "Hello, Preeti!"