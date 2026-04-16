let rawResponse :unknown = {
    status : 200,
    body : {user : "Admin",role:"Tester"}
}

interface UserResponse {
    status : number,
    body : {user:string,role:string}
}

let res = rawResponse as UserResponse;
console.log(res.status + "  " + res.body.user + "  " + res.body.role)