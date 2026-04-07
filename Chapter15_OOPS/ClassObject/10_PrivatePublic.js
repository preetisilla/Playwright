//Private field # - hidden data

class Credential{
    #apiKey; //private
    user; //public

    constructor(name,key){
        this.name = name;
        this.#apiKey = key;
    }

    getHeader(){
        return "Bearer " + this.#apiKey;
    }
}
let cred = new Credential("Login","12345")
console.log(cred.name);
console.log(cred.getHeader())
//console.log(cred.apiKey); //undefined
//console.log(cred.#apiKey); //Syntax error Cannot access outside the class as it is private