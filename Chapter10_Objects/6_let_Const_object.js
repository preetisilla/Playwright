const config = {
    url: "https://example.com",
    method: "GET",
    timeout: 5000
};
config.timeout = 3000; // Modifying the timeout property
config.browser = "chrome"; // Adding a new property to the config object
console.log(config); // Output: { url: "https://example.com", method: "GET", timeout: 3000, browser: "chrome" }

delete config.method; // Deleting the "method" property from the config object

/*config = { url: "https://example.com", timeout: 3000, browser: "chrome" }; // Reassigning the config variable to a new object
console.log(config); // Output: { url: "https://example.com", timeout: 3000, browser: "chrome" }*/



let student = {name : "Preeti",age : 25}
student.name = "Bob";
student.class = "5th";
console.log(student);
student = {height : "54"}
console.log(student);