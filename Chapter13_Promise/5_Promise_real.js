function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser opened");
    });
}

function login(){
    return new Promise(function(resolve){
        resolve("Logged in");   
    });
}

function search(){
    return new Promise(function(resolve){
        resolve("Search completed");
    });
}

openBrowser().then(function(msg){
    console.log(msg);
    return login(); 
}).then(function(msg){
    console.log(msg);
    return search();
}).then(function(msg){
    console.log(msg);
    console.log("All tasks completed");
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("All operations completed.");
});

