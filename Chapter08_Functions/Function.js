// first Define
function getResult(score){
    return score > 70 ? "Pass" : "Fail";    
}

//Then call the function with different scores to see the results
getResult(85); // Output: "Pass"
getResult(65); // Output: "Fail"

//Basic function - no argument no return typee.g.
function greet(){
    console.log("Hello, welcome to Playwright!");
}
greet(); // Output: "Hello, welcome to Playwright!"

//Type 2 - With argument and no return typee.g.
function greetByName(name){ // parameter is "name"
    console.log(`Hello, ${name}! Welcome to Playwright!`);
}
greetByName("Alice"); // actuals are arguements and "Alice" is passed to the parameter "name" and output will be "Hello, Alice! Welcome to Playwright!"

//Type 3 - Without argument and with return typee.g.
function getCurrentYear(){
    return new Date().getFullYear(); // returns the current year
}
let year = getCurrentYear(); // Output: current year
console.log(year); // Output: current year

//Type 4 - With argument and with return typee.g.
function calculateArea(radius){
    return Math.PI * radius * radius; // returns the area of a circle given its radius
}
let area = calculateArea(5); // Output: area of a circle with radius 5
console.log(area); // Output: area of a circle with radius 5