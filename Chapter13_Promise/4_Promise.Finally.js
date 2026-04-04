let apiCall = new Promise(function(resolve,reject){
    let isSuccessful = false; // Simulates whether the API call is successful or not
    if(isSuccessful){
        resolve("API call was successful!"); // Resolves the promise with a success message 
    } else {
        reject("API call failed!"); // Rejects the promise with an error message
    }       
})

apiCall.then(function(msg){ //Resolves the promise and executes the callback function if the promise is fulfilled
    console.log(msg); // 
}).catch(function(err){ // Rejects the promise and executes the callback function if the promise is rejected
    console.log(err); // 
}).finally(function(){ // Executes the callback function regardless of whether the promise is fulfilled or rejected
    console.log("API call completed."); // 
});