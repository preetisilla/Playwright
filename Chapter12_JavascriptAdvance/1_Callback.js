//Callback

function printOrder(order, callback) {
    console.log("Order received: " + order);
    callback(); // Calls the callback function after printing the order
}

function printDone(){
    console.log("Order is being processed...");
}

printOrder("Pizza", printDone); // Output: Order received: Pizza

//fn expression as callback
printOrder("Burger", function() {
    console.log("Order is being processed...");
}); // Output: Order received: Burger

//Arrow function as callback
printOrder("Pasta", () => {
    console.log("Order is being processed...");
}); // Output: Order received: Pasta

//Callback function can return a value
function calculate(a, b, callback) {
    let result = a + b; // Performs a calculation (addition in this case)
    return callback(result); // Calls the callback function with the result and returns its value
}
let finalResult = calculate(5, 10, function(sum) {
    return sum * 2; // Multiplies the sum by 2 and returns the final result
});
console.log(finalResult); // Output: 30 - logs the final result of the calculation after processing it through the callback function