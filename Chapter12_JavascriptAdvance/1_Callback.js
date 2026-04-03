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