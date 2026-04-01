function add(a,b,c){
    return a+b+c;   
}

let num = [1,2,3];

console.log(add(...num)); // Output: 6 - uses the spread operator to pass the elements of the num array as individual arguments to the add function 


function hasError(...codes){
    return codes.some(r => r>400);
}
let responseCodes = [200, 404, 500];
console.log(hasError(...responseCodes)); // Output: true - uses the spread operator to pass the elements of the responseCodes array as individual arguments to the hasError function, which checks if any of the codes are greater than 400