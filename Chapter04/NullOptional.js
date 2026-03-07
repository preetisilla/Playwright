let val = null ?? "default"
console.log(val); // Output: "default"

let val2 = undefined ?? "default"
console.log(val2); // Output: "default"

let firstname = null ?? "Silla";
let name = firstname + "Preeti";
console.log(name); // Output: "SillaPreeti"