let element : unknown = {
    id:5,
    name:"Preeti",
    age:35,
    isMarried :true
}

let user = element as {id:number,name:string,age:number,isMarried:boolean}

console.log(user.id + " " + user.name + " " + user.age +" "+ user.isMarried)