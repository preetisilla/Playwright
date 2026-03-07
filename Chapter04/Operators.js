let a = 10;
let b = 3;

let sum = a+b;
let minus = a-b;
let multiply = a*b;
let divide = a/b;
let modulus = a%b;  

console.log("Sum: " + sum);
console.log("Minus: " + minus);
console.log("Multiply: " + multiply);
console.log("Divide: " + divide);
console.log("Modulus: " + modulus); 

console.log(2 ** 3); // Exponentiation operator

//Assignment operator
let x = 10;
console.log(x+=5); // x = x + 5
console.log(x-=3);  // x = x - 3
console.log(x*=2);  // x = x * 2        
console.log(x/=4);  // x = x / 4
console.log(x%=3);  // x = x % 3

//Comparision operators
console.log(a == b);    // Equal to 

console.log(a != b);    // Not equal to

console.log(a > b);     // Greater than     
console.log(a < b);     // Less than
console.log(a >= b);    // Greater than or equal to
console.log(a <= b);    // Less than or equal to    

console.log(a === b);   // Strict equal to
console.log(a !== b);   // Strict not equal to  

//Logical operators
let c = true;
let d = false;  
console.log(c && d);   // Logical AND
console.log(c || d);   // Logical OR
console.log(!c);       // Logical NOT       

//String concatenation operator
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; 
console.log(result);

//Ternary operator
let age = 20;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);

//typeof operator
console.log(typeof a);  
console.log(typeof str1);
console.log(typeof c);
console.log(typeof age);
console.log(typeof undefined);
console.log(typeof null); // Note: typeof null returns "object" due to a historical bug in JavaScript.  
console.log(typeof true);
console.log(typeof []);
console.log(typeof {});

console.log(`number is ${2+3}`); // Template literals with expression
