let order = new Promise(function(resolve, reject) {
    let isOrderReady = true; // Simulates whether the order is ready or not
    if (isOrderReady) {
        resolve("Order is ready!"); // Resolves the promise with a success message  
    } else {
        reject("Order is not ready!"); // Rejects the promise with an error message
    }
});

order.then(function(message) {
    console.log(message); // Output: Order is ready! - logs the success message if the promise is resolved
}).catch(function(error) {
    console.log(error); // Logs the error message if the promise is rejected
});