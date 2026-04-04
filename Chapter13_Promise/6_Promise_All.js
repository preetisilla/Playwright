let checkAuth = Promise.resolve("User authenticated"); // Creates a promise that is immediately resolved with the value "User authenticated"
let fetchData = Promise.resolve("Data fetched successfully"); // Creates a promise that is immediately resolved with the value "Data fetched successfully"

Promise.all([checkAuth, fetchData]) // Takes an array of promises and returns a new promise that resolves when all the promises in the array have resolved  
    .then(function(results) { // Executes the callback function when all promises are resolved
        console.log(results); // Output: ["User authenticated", "Data fetched successfully"] - logs the array of resolved values from the promises
    }).catch(function(error) { // Executes the callback function if any of the promises in the array are rejected
        console.log(error); // Logs the error message if any promise is rejected
    }).finally(function() { // Executes the callback function regardless of whether the promises are resolved or rejected
        console.log("All operations completed."); // Logs a message indicating that all operations have completed
    });

    // alternative
    Promise.all([
        Promise.resolve("User authenticated"), // Creates a promise that is immediately resolved with the value "User authenticated"
        Promise.resolve("Data fetched successfully") // Creates a promise that is immediately resolved with the value "Data fetched successfully"           
    ]).then(function(results) { // Executes the callback function when all promises are resolved
        console.log(results); // Output: ["User authenticated", "Data fetched successfully"] - logs the array of resolved values from the promises
    }).catch(function(error) { // Executes the callback function if any of the promises in the array are rejected
        console.log(error); // Logs the error message if any promise is rejected
    }).finally(function() { // Executes the callback function regardless of whether the promises are resolved or rejected
        console.log("All operations completed."); // Logs a message indicating that all operations have completed
    });

    