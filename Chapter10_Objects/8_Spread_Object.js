let obj1 = { name: "Alice", age: 30 }; // creates an object with two properties: name and age
let obj2 = { class: "Bob", course: "Playwright" }; // creates another object with different properties

//Using spread operator to combine properties of obj1 and obj2 into a new object
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // Output: { name: "Bob", age: 30, course: "Playwright" } - the name property from obj2 overwrites the name property from obj1