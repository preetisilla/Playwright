let apiCall = new Promise(function(resolve, reject) {
    let isSuccessful = true; // Simulates whether the API call is successful or not
    if (isSuccessful) {
        resolve("API call was successful!"); // Resolves the promise with a success message 
    }
});

apiCall.then(function(message) {
    console.log(message); // Output: API call was successful! - logs the success message if the promise is resolved
});