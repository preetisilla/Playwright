function openBrowsser(callback){
    setTimeout(function(){
        console.log("Browser opened");
        callback();
    }, 2000);
}

function login(callback){
    setTimeout(function(){
        console.log("Logged in");
        callback();
    }, 2000);
}

function search(callback){
    setTimeout(function(){
        console.log("Search completed");
        callback();
    }, 2000);
}

    //This callback hell is a situation where multiple nested callbacks are used, making the code difficult to read and maintain. Each callback is nested within the previous one, creating a pyramid-like structure that can become hard to manage as more asynchronous operations are added.
openBrowsser(function(){
    login(function(){
        search(function(){
            console.log("All tasks completed");
        })
    })
})