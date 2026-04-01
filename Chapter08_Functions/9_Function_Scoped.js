let x = 10; //global scope variable
function test(){
    let y = 20; //function scope variable
    console.log(x); // Output: 10
}
test();
console.log(y); // ReferenceError: y is not defined
console.log(x); // Output: 10

//Nested scope | Blocked scope
function outer(){
    let a = 5;  
    function inner(){
        let b = 10;
        console.log(a); // Output: 5
        console.log(b); // Output: 10
    }   
    inner();
    console.log(a); // Output: 5
    console.log(b); // ReferenceError: b is not defined
}