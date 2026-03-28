let arr = [10, 20, 30, 40, 50]; // creates an array with five numeric elements
console.log(arr[0]);

arr.push(60); // Adds 60 to the end of the array
console.log(arr); // Output: [10, 20, 30, 40, 50, 60]

arr.pop(); // Removes the last element (60) from the array
console.log(arr); // Output: [10, 20, 30, 40, 50]

arr.unshift(5); // Adds 5 to the beginning of the array
console.log(arr); // Output: [5, 10, 20, 30, 40, 50]

arr.shift(); // Removes the first element (5) from the array
console.log(arr); // Output: [10, 20, 30, 40, 50]

arr.splice(2, 1); // Removes 1 element at index 2 (30)
console.log(arr); // Output: [10, 20, 40, 50]

arr.splice(1, 0, 15); // Inserts 15 at index 1 without removing any elements
console.log(arr); // Output: [10, 15, 20, 40, 50]

arr.splice(2,2, 25, 35); // Removes 2 elements at index 2 (20 and 40) and inserts 25 and 35
console.log(arr); // Output: [10, 15, 25, 35, 50]