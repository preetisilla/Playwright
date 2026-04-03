// Sync functions execute in the order they are called, blocking the execution of subsequent code until they complete. In contrast, asynchronous functions allow other code to run while waiting for an operation to complete, enabling non-blocking behavior.

function syncFunction1() {
    console.log("Sync Function 1");
}
function syncFunction2() {
    console.log("Sync Function 2");
}

let testResults = ["Passed", "Failed", "Passed"];
function syncFunction3() {
    console.log("Sync Function 3");
    console.log("Test Results:", testResults);
}
syncFunction1(); // Output: Sync Function 1
syncFunction2(); // Output: Sync Function 2
syncFunction3(); // Output: Sync Function 3, Test Results: ["Passed", "Failed", "Passed"] - executes in the order they are called, blocking subsequent code until each function completes