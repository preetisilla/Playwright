let result = Array.isArray([1, 2, 3]); // checks if the provided value is an array
console.log(result); // Output: true
result = Array.isArray("Hello"); // checks if the provided value is an array
console.log(result);

//every

let r = [80,90,88].every(s => s > 70); // checks if every element in the array satisfies the condition (greater than 70)
console.log(r); // Output: true

//some
let r1 = [80, 65, 88].some(s => s < 70); // checks if at least one element in the array satisfies the condition (less than 70)
console.log(r1); // Output: true