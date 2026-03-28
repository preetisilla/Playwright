let scores = [85, 92, 78, 90, 88]; // creates an array with numeric elements representing test scores

//map method to create a new array with "Pass" or "Fail" based on the scores
let grades = scores.map(s => s >70 ? "Pass" : "Fail");
console.log(grades); // Output: ["Pass", "Pass", "Pass", "

//filter method to create a new array with only the passing scores
let passing = scores.filter(s => s>70);
console.log(passing); // Output: [85, 92, 78, 90, 88]

//reduce method to calculate the average score
let average = scores.reduce((acc, score) => acc + score, 0) / scores.length;
console.log(average); // Output: 86.6

//flat
let nested = [[1, 2], [3, 4], [5, 6]]; // creates a nested array
let flatArray = nested.flat();
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]
