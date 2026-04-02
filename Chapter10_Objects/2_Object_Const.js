const user = {
    name: "Alice",
    age: 30,
    course : "Playwright"
}

//Dynamic nature of objects
const key = "name";
console.log(user[key]); // Output: Alice

//Adding/modifying properties
user.email = "preeyi.silla@gmail.com"
user.age = 31;
console.log(user);

//Add/Delete properties
let config = {};
config.url = "https://example.com";
config.method = "GET";
config.timeout = 5000;
config.timeout = 3000; // Modifying the timeout property
console.log(config);
delete config.method; // Deleting the "method" property from the config object
console.log(config);
