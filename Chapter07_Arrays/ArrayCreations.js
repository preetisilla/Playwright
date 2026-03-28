let fruits =[]; // creates an empty array using array literal syntax
console.log(fruits); // Output: []

let fruits_fresh = ["Apple", "Banana", "Cherry"]; // creates an array with three string elements
console.log(fruits_fresh); // Output: ["Apple", "Banana", "Cherry"] 

let testResults = ["pass", "fail", "pass", "pass"]; // creates an array with string elements representing test results
console.log(testResults); // Output: ["pass", "fail", "pass", "pass"]

let mixedArray = [42, "Hello", true, null, undefined, { name: "Preeti" }, [1, 2, 3]]; // creates an array with mixed data types
console.log(mixedArray); // Output: [42, "Hello", true, null, undefined, { name: "Preeti" }, [1, 2, 3]]

let arr = [10, 20, 30];
console.log(arr[3]); // Output: undefined

let test = Array.of(10,20,30,40); // creates an array with the specified elements
console.log(test); // Output: [10, 20, 30, 40]
console.log(test[0]); // Output: 10

let chars = Array.from("Hello"); // creates an array from a string, where each character becomes an element
console.log(chars); // Output: ["H", "e", "l", "l", "o"]