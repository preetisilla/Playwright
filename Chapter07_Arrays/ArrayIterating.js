let tests = ["tests1", "tests2", "tests3", "tests4"]; // creates an array with string elements representing test names

// Using for loop to iterate over the array
for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

// Using for...of loop to iterate over the array
for (let test of tests) {
    console.log(test); //value of each element in the array will be logged
}

for (let test in tests) {
    console.log(test); // This will log the index of each element in the array
}

//foreach method to iterate over the array
tests.forEach((test,index) => {
    console.log(`Test ${index + 1}: ${test}`);
})

//entries = index + value
for (let [index, test] of tests.entries()) {
    console.log(`Test ${index + 1}: ${test}`);
}