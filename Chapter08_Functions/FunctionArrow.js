
//Function Expression - A function expression is a function that is assigned to a variable. It can be anonymous (without a name) or named. In this example, we are using an anonymous function expression.
const greet2 = function(name) {
    return `Hello, ${name}! Welcome to Playwright!`;
}

console.log(greet2("Preeti")); // Output: "Hello, Preeti! Welcome to Playwright!"

//Arrow function - same as above function but in arrow function format
//only works in single line
const greet3 = (name) => `Hello, ${name}! Welcome to Playwright!`;
console.log(greet3("Preeti")); // Output: "Hello, Preeti! Welcome to Playwright!"

//Same as below function

const doubleIt = n => n*2;
console.log(doubleIt(5)); // Output: 10

//Same as below function
const getEnv = () => "staging";
console.log(getEnv()); // Output: "staging"

//Same as below function
const getCurrentYear = () => new Date().getFullYear();
console.log(getCurrentYear()); // Output: current year

const getResults = (score) => {
    if(score > 70){
        return "Pass";
    } else {
        return "Fail";
    }
}
console.log(getResults(85)); // Output: "Pass"
console.log(getResults(65)); // Output: "Fail"