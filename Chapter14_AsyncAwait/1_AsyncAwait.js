getToken().then(function(token){
    console.log("Token:", token);
    return getUser(token);
}).then(function(user){
    console.log("User:", user);
    return getPosts(user);
}).then(function(posts){
    console.log("Posts:", posts);
    console.log("All tasks completed");
}).catch(function(error){
    console.error("Error occurred:", error);
}).finally(function(){
    console.log("All operations completed.");
});

async function performTasks() {
    try {
        let token = await getToken();
        console.log("Token:", token);

        let user = await getUser(token);
        console.log("User:", user);

        let posts = await getPosts(user);
        console.log("Posts:", posts);
        
    } catch (error) {
        console.error("Error occurred:", error);
        
    } finally {
        console.log("All operations completed.");
    }
}