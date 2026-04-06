let names = ["Amit Kumar", "Neha Singh"]
let roles = ["admin", "viewer"]

let userObj = {
    username : "",
    email : "",
    role : ""
}

let username1 = "";
let useremail1 = "";
let userrole1 = "";
let users = [{
    username : "",
    email : "",
    role : ""
}];

for (i = 0 ;  i < names.length ; i++){
    username1 = names[i].replace(" ","_");
    useremail1 = username1 + "@playwrightbatch.com";
    userrole1 = roles[i];
    
    userObj.username = username1;
    userObj.email = useremail1;
    userObj.role = userrole1;
    
    console.log(userObj)
    
    users[i] = userObj

}
console.log(users);