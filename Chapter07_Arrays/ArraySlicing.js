let arr = [1,2,3,4,5];

console.log(arr.slice(2,4)); // Output: [3, 4] - returns a new array containing elements from index 2 to 3 (4 is not included)

console.log(arr.slice(1, 4)); // Output: [2, 3, 4] - returns a new array containing elements from index 1 to 3 (4 is not included)

console.log(arr.slice(-2)); // Output: [4, 5] - returns a new array containing the last two elements of the array
console.log(arr.slice(0, -1)); // Output: [1, 2, 3, 4] - returns a new array containing all elements except the last one

console.log(arr.slice(-5,2));
console.log(arr.slice(-5)); // Output: [1, 2, 3, 4, 5] - returns a new array containing all elements from index -5 to the end of the array