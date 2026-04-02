let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) { //row length
  for (let j = 0; j < matrix[i].length; j++) { //column length
    console.log(matrix[i][j]); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9 - logs each element of the multi-dimensional array
  }
}


console.log(matrix[matrix.length - 1][matrix[0].length - 1]); // Output: 9 - Accessing the last element of the multi-dimensional array using negative indexing

for (let row of matrix) { // Using for...of loop to iterate through each row of the multi-dimensional array
  for (let element of row) { // Using for...of loop to iterate through each element in the current row
    process.stdout.write(element + " "); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9 - logs each element of the multi-dimensional array
  }
  console.log(); // Adds a new line after each row is printed
}

