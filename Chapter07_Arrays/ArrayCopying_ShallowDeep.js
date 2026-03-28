let original = [1, 2, 3, 4, 5]; // creates an array with five numeric elements
//Shallow copy
let copy1 = [...original]; // creates a shallow copy of the original array using the spread operator
console.log(copy1); // Output: [1, 2, 3, 4, 5]  

let copy2 = original.slice(); // creates a shallow copy of the original array using the slice method
console.log(copy2); // Output: [1, 2, 3, 4, 5]  

let copy3 = Array.from(original); // creates a shallow copy of the original array using the Array.from method
console.log(copy3); // Output: [1, 2, 3, 4, 5]

let copy4 = original.concat(); // creates a shallow copy of the original array using the concat method
console.log(copy4); // Output: [1, 2, 3, 4, 5]

copy1.push(6); // Modifying copy1 by adding a new element
console.log(copy1);
console.log(original); // Output: [1, 2, 3, 4, 5] - original array remains unchanged

//Deep copy
copy4 = original;
original.push(90);
console.log(original); // Output: [1, 2, 3, 4, 5, 90] - original array is modified
console.log(copy4); // Output: [1, 2, 3, 4, 5, 90] - copy4 is affected by changes to original array

console.log(original.at(-3)); // Output: 90 - negative indexing works with the at() method in JavaScript