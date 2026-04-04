Promise.allSettled([
    Promise.resolve("Task 1 completed"), // Simulates a successful promise
    Promise.reject("Task 2 failed"), // Simulates a rejected promise
    Promise.resolve("Task 3 completed") // Simulates another successful promise
]).then(function(results) {
    console.log("Test results:");
    results.forEach(function(result, index) {
        if (result.status === "fulfilled") {
            console.log("Task " + (index + 1) + ": " + result.value);
        } else {
            console.log("Task " + (index + 1) + ": " + result.reason);
        }
    });
});

//Used for reporting the results of multiple promises, regardless of whether they were fulfilled or rejected. Each result object contains a status property indicating whether the promise was fulfilled or rejected, and either a value property (for fulfilled promises) or a reason property (for rejected promises).