let apiCall = new Promise(function(resolve, reject) {
    let isSuccessful = false; // Simulates whether the API call is successful or not
    if (isSuccessful) {
        resolve("API call was successful!"); // Resolves the promise with a success message 
    } else {
        reject("API call failed!"); // Rejects the promise with an error message
    }   
});

apiCall.then(function(message) {
    console.log(message); // Output: API call was successful! - logs the success message if the promise is resolved
}).catch(function(error) {
    console.log(error); // Logs the error message if the promise is rejected
});