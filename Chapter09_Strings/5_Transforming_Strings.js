let str = "Helloworld";
console.log(str.toUpperCase()); // "HELLOWORLD" - converts the string to uppercase
console.log(str.toLowerCase()); // "helloworld" - converts the string to lowercase
str.trim(); // "Helloworld" - removes whitespace from both ends of the string
str.trimStart(); // "Helloworld" - removes whitespace from the start of the string
str.trimEnd(); // "Helloworld" - removes whitespace from the end of the string

str.replace("world", "JavaScript"); // "Helloworld" - replaces the first occurrence of "world" with "JavaScript"
str.replaceAll("o", "0"); // "Hell0w0rld" - replaces all occurrences of "o" with "0"
str.replace(/world/g, "JavaScript"); // "Helloworld" - replaces all occurrences of "world" with "JavaScript" using a regular expression
str.replace(/o/gi, "0"); // "Hell0w0rld" - replaces all occurrences of "o" with "0", ignoring case

"Hello" + " " + "World"; // "Hello World" - concatenates two strings with a space in between
"Hello".concat(" ", "World"); // "Hello World" - concatenates two strings with a space in between using the concat() method
`Hello ${"World"}`; // "Hello World" - concatenates two strings using template literals

let url = "https://www.example.com";
url.replace(/example/g, "test"); // "https://www.test.com" - replaces all occurrences of "example" with "test" in the URL

console.log("pass, fail, pass".split(", ")); // ["pass", "fail", "pass"] - splits the string into an array of substrings based on the delimiter ", "

"hello".split(""); // ["h", "e", "l", "l", "o"] - splits the string into an array of individual characters

let parts = ["2024", "06", "15"];
console.log(parts.join("-")); // "2024-06-15" - joins the array elements into a string with "-" as the separator
