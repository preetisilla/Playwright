let fruits = ["Banana", "Apple", "Cherry", "Date"]; // creates an array with string elements representing fruit names

fruits.sort(); // Sorts the array in alphabetical order
console.log(fruits); // Output: ["Apple", "Banana", "Cherry", "Date"]

let num = [1,20,10,21,2];
num.sort(); // Sorts the array in ascending order (lexicographical order for numbers)
console.log(num); // Output: [1, 10, 2, 20, 21]

num.sort((a,b) => a-b); // Sorts the array in ascending order (numerical order)
console.log(num); // Output: [1, 2, 10, 20, 21]

num.sort((a,b) => b-a); // Sorts the array in descending order (numerical order)
console.log(num); // Output: [21, 20, 10, 2, 1]