class ICICI{
    #balance;

    constructor(name,balance){
        this.name = name;
        this.#balance = balance;

    }

    getBalance(){
        return this.#balance;
    }

    setBalance(newBal,isCashier){
    if(isCashier)
        this.#balance = newBal;
    else
        console.log("Not Allowed")
    }
}

let p1 = new ICICI("Preeti",1000)
console.log(p1.getBalance());
p1.setBalance(2000,false)
console.log(p1.getBalance());

let p2 = new ICICI("PP",5000)
console.log(p2.getBalance());
p2.setBalance(2000,true)
console.log(p2.getBalance());
