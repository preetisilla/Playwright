let str = "Hello, World!";
console.log(str.length);

console.log(str[0]);
console.log(str[7]);
console.log(str[-1]); // undefined, as negative indexing is not supported in JavaScript strings
console.log(str.at(-1)); // "!" - using the at() method to access the last character of the string
console.log(str.at(-5)); // "W" - using the at() method to access the fifth character from the end of the string    

console.log(str.toUpperCase()); // "HELLO, WORLD!" - converts the string to uppercase

console.log(str.charAt(0)); // "H" - returns the character at the specified index
console.log(str.charAt(7));