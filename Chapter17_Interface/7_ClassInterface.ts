interface Executable{
    name : string,
    run() : void,
    getStatus() : string
}

class TestRun implements Executable{
    name: string
    constructor(name : string){
        this.name = name;
    }
    run() : void {
        console.log("Run the tests")
    }
    getStatus(): string {
        return "Pass"
    }
}

let test1 = new TestRun("Login")
test1.run()