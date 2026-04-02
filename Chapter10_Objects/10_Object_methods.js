const obj= {a:1, b:2, c:3}; // creates an object with three properties: a, b, and c

console.log(Object.keys(obj)); // Output: ["a", "b", "c"] - returns an array of the object's own property names
console.log(Object.values(obj)); // Output: [1, 2, 3] - returns an array of the object's own property values
console.log(Object.entries(obj)); // Output: [["a", 1], ["b", 2], ["c", 3]] - returns an array of the object's own key-value pairs as arrays

for (const key in obj) {
  console.log(`${key}: ${obj[key]}`); // Output: a: 1, b: 2, c: 3 - iterates over the object's enumerable properties and logs each key and its corresponding value
}

Object.keys(obj).forEach(key => {
  console.log(`${key}: ${obj[key]}`); // Output: a: 1, b: 2, c: 3 - iterates over the array of keys and logs each key and its corresponding value
});