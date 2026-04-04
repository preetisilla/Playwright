async function performTasks() {
    try {
        let token = await Promise.resolve("abc123");
        console.log("Token:", token);

        let user = await Promise.reject("qwe");
        console.log("User:", user);

        let posts = await Promise.resolve("post1, post2, post3");
        console.log("Posts:", posts);
        
    } catch (error) {
        console.error("Error occurred:", error);
        
    } finally {
        console.log("All operations completed.");
    }
}

performTasks();