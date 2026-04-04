async function getResults(){
    return "Pass";
}

let result = await getResults(); // waits for the getResults function to complete and returns its result
console.log(result); // Output: "Pass"

//function - async function that returns a promise
//Not a function/Promise - await

