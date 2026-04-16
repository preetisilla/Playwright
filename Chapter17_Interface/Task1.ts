//Define interfaces for user data 

interface userData{
    name: string,
    gender : string,
    age : number,
    height : number,
    email : string,
    phone: number
    isMarried : boolean
}

//Create interfaces with optional properties

interface userDataOptional{
    name: string,
    gender : string,
    age : number,
    height : number,
    email : string,
    phone: number
    run ?: boolean
    isWorking ?: boolean
}

//Extend interfaces for inheritance

interface user extends userData{
    school : string,
    class : string,
    Results : string
}

let u1 : user = {
    name : "Preeti",
    gender : "Female",
    age : 35,
    height : 175,
    email : "string@gmail.com",
    phone: 76531468,
    isMarried : true,
    school : "ITR",
    class : "BE",
    Results : "Pass"
}

console.log(u1.Results)

//Implement interfaces in classes

interface BasePage{
    url:string,
    gotoPage():void,
    getUrl():string
}

class UserPage implements BasePage{
    url:string
    constructor(url: string){
        this.url = url;
    }
    gotoPage():void{
        console.log("goto page")
    }
    getUrl():string{
        return this.url;
    }


}