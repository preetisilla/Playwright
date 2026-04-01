//Pure function
// A pure function is a function that always produces the same output for the same input and has no side effects (it does not modify any external state).

function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 - same output for the same input

function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 5)); // Output: 20
console.log(multiply(4, 5)); // Output: 20 - same output for the same input

//Impure function
// An impure function is a function that may produce different outputs for the same input or has side effects (it modifies external state).
let count = 0; // external state
function increment() {
    count++;    
    return count;
}
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2 - different output for the same input (no input in this case)    