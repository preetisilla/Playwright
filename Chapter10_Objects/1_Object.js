let student = {name : "Preeti", age : 25, course : "Playwright"};
console.log(student.name);

//JSON
let student1 = '{"name" : "Preeti", "age" : 25, "course" : "Playwright"}';
console.log(student1);

console.log(student.course);
console.log(student["age"]); // student.age is also valid

//cannot have space in key name
let student2 = {"first name" : "Preeti", age : 25, course : "Playwright"};
console.log(student2["first name"]); // Accessing the value of the "first name" key using bracket notation

//keys are case sensitive
let str = {student1 : "Preeti", Student1 : "John"};
console.log(str.student1);  
console.log(str.Student1); 

//assign a object to another object 
let obj1 = {a: 1, b: 2};
let obj2 = obj1; // obj2 now references the same object as obj1
obj2.a = 10; // Modifying obj2 will also affect obj1 since they reference the same object
console.log(obj1);

//two seperate objects - different memory locations
let obj3 = {a: 1, b: 2};
let obj4 = {a: 1, b: 2};    
console.log(obj3 === obj4); // Output: false - obj3 and obj4 are different objects in memory, even though they have the same properties and values