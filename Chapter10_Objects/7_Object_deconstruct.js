const user = {name : "John", age:25, city:"NYC"}

//Basic deconstructing
const{name,age} = user;
console.log(name);
console.log(age);

//TRename variables
const {name:userName,age:UserAge} = user;
console.log(userName);
console.log(UserAge);

//Default values
const {country = "USA"} = user;
console.log(country);

const data = {user : {name:"John"}}