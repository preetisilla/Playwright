let scores = [
  [85, 92, 78], // scores for student 1
  [90, 88, 95], // scores for student 2
  [80, 85, 82]  // scores for student 3
];

let rowSums = scores.map(row => row.reduce((sum, score) => sum + score, 0)); // calculates the sum of each row (student's total score)
console.log(rowSums); // Output: [255, 273, 247] - logs the total scores for each student
