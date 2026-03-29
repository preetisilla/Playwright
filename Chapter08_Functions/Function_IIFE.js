//IIFE 
//Immediately Invoked Function Expression
//An IIFE is a function that is defined and immediately invoked (called) in the same expression. It is often used to create a new scope and avoid polluting the global namespace.

(function() {
    console.log("This is an IIFE function");
})(); // Output: "This is an IIFE function"

(() => {
    console.log("This is an IIFE arrow function");      
})(); // Output: "This is an IIFE arrow function"

(function(name) {
    console.log(`Hello, ${name}! This is an IIFE function with a parameter.`);
})("Preeti"); // Output: "Hello, Preeti! This is an IIFE function with a parameter."

((name) => {
    console.log(`Hello, ${name}! This is an IIFE arrow function with a parameter.`);      
})("Preeti"); // Output: "Hello, Preeti! This is an IIFE arrow function with a parameter."