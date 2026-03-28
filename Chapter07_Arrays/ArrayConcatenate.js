let a = [1,2]
let b = [3,4]

let c = a.concat(b); // Concatenates arrays a and b into a new array c
console.log(c); // Output: [1, 2, 3, 4]

let d = a.concat(b, [5,6]); // Concatenates arrays a, b, and another array [5,6] into a new array d
console.log(d); // Output: [1, 2, 3, 4, 5, 6]

//spread operator can also be used to concatenate arrays
let e = [...a, ...b];   // Concatenates arrays a and b into a new array e using the spread operator
console.log(e); // Output: [1, 2, 3, 4]

//join
let s = ["Pass","fail","Skip"].join(", "); // Joins the elements of the array into a string with ", " as the separator
console.log(s); // Output: "Pass, fail, Skip"