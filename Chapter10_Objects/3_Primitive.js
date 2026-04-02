let a = 10;
let b = a; // b is assigned the value of a (10)
b = 99;
console.log(a); // Output: 10 - a remains unchanged because it is a primitive value
console.log(b); // Output: 99 - b has been modified independently of a

let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 is assigned the reference to the same object as obj1
obj2.name = "Bob"; // Modifying obj2 will also affect obj1 since they reference the same object
console.log(obj1.name); // Output: Bob - obj1 is also affected because it references the same object