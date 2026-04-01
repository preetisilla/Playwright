
(200).toString(); // "200" - converts the number to a string
(true).toString(); // "true" - converts the boolean value to a string
null.toString(); // TypeError: Cannot read properties of null (reading 'toString')

undefined.toString(); // TypeError: Cannot read properties of undefined (reading 'toString')
[1, 2].toString(); // "1,2" - converts the array to a string
({ name: "Preeti" }).toString(); // "[object Object]" - converts the object to a string

Number("42"); // 42 - converts the string to a number

parseInt("42px"); // 42 - parses the string and returns an integer
parseFloat("3.14abc"); // 3.14 - parses the string and returns a floating-point number

let str = "hello";
str[0] = "H"; // This will not change the string, as strings are immutable in JavaScript
console.log(str); // Output: "hello" - the original string remains unchanged
//Strings are immutable, which means that once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string.

let upper = str.toUpperCase(); // "HELLO" - creates a new string with all characters in uppercase
console.log(upper);
console.log(str); // Output: "hello" - the original string remains unchanged