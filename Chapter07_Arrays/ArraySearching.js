let results = ["pass", "fail", "pass", "pass","error","fail"]; // creates an array with string elements representing test results

results.indexOf("fail"); // Returns the index of the first occurrence of "fail"
console.log(results.indexOf("fail")); // Output: 1  

results.lastIndexOf("fail"); // Returns the index of the last occurrence of "fail"
console.log(results.lastIndexOf("fail")); // Output: 5

results.includes("error"); // Checks if "error" is present in the array
console.log(results.includes("error")); // Output: true 

results.indexOf("Skipped"); // Returns -1 since "Skipped" is not in the array
console.log(results.indexOf("Skipped")); // Output: -1

let num = [10, 20, 30, 40, 50];
console.log(num.find(element => element > 25));
console.log(num.findIndex(element => element > 25));

console.log(num.findLast(element => element > 25));
console.log(num.findLastIndex(element => element > 25));