let age = 10; // age is a literal of type number
let name = "Preeti"; // name is a literal of type string
let isStudent = true; // isStudent is a literal of type boolean
let person = { // person is a literal of type object
    name: "Preeti",
    age: 10
};
let numbers = [1, 2, 3, 4, 5]; // numbers is a literal of type array
let nullvalue = undefined; // nullvalue is a literal of type undefined
let nullValue = null; // nullValue is a literal of type null    


let namesingle = 'Preeti'; // single quotes can also be used for string literals
let templateLiteral = `My name is ${namesingle}`; // template literals allow for embedding expressions and multi-line strings
console.log(templateLiteral);   

let math = '2+2 = ${2+2}'; // this will not evaluate the expression, it will be treated as a normal string
console.log(math);  

// \\ - path
// // - url
let path = "C:\\Users\\Preeti\\Documents"; // using double backslashes to escape the backslash character
console.log(path);  

let url = "https://www.example.com/search?q=JavaScript%20literals"; // using percent encoding for special characters in URLs
console.log(url);   

let empty = ""; // empty string literal
let whitespace = "   "; // string literal with only whitespace
let zero = "0"; // string literal that looks like a number but is actually a string
console.log(empty);
console.log(whitespace);
console.log(zero);

let isempty = true; // boolean literal
console.log(isempty);

let result = null; // null literal
console.log(result);

let search;
console.log(search); // undefined literal   

