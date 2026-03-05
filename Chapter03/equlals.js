console.log(null === undefined); // false, null and undefined are different types
console.log(null == undefined); // true, null and undefined are considered equal in non-strict equality 
console.log(typeof null); // "object", this is a quirk in JavaScript, null is of type object
console.log(typeof undefined); // "undefined", undefined is of type undefined   
console.log(null == 0); // "number", 10 is of type number
console.log(null == ""); // "boolean", false is of type boolean  

// =, ==, ===
let abc = 10; // assignment operator
console.log(abc == 10);
console.log(5 == 5);
console.log(5 === 5.0);
console.log(5 == "5.0");

