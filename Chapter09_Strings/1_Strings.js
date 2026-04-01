//double quotes
let str = "Helloworld";
//single quotes
let str1 = 'Helloworld';

//template literals
let message = `Test complete ${str}`;

console.log(str);
console.log(str1);
console.log(message);

//multiline string
let multiLineStr = `This is a 
multiline string 
using template literals.`;
console.log(multiLineStr);

//string constructor
let str2 = new String("Helloworld");
console.log(str2);
console.log(String(200)); // Converts the number 200 to a string and logs it
console.log(String(true)); // Converts the boolean value true to a string and logs it
console.log(String(null)); //"null"
console.log(String(undefined)); //"undefined"
console.log(String([1,2])); //"1,2"
console.log(String({name: "Preeti"})); //"[object Object]"