greet("Preeti"); // Output: Hello, Preeti!

function greet(name) {
    console.log(`Hello, ${name}!`);
}
// The above code demonstrates function hoisting in JavaScript. The function greet is called before it is defined, but it still works because function declarations are hoisted to the top of their scope.

// However, if we try to call a function expression before it is defined, we will get an error:

greet2("Preeti"); // TypeError: greet2 is not a function

var greet2 = function(name) {
    console.log(`Hello, ${name}!`);
};
// In this case, greet2 is a function expression assigned to a variable. The variable declaration is hoisted, but the assignment is not, so greet2 is undefined at the time of the call, resulting in a TypeError.  