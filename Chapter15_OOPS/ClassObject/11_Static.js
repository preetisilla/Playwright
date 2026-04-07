class TestRunner{
    static totalTest = 0;
    static totalPassed = 0;

    constructor(name,passed){
        this.name = name;
        TestRunner.totalTest++;
        if(passed){
            TestRunner.totalPassed++; //static called only through class name
        }
    }
    display(){
        console.log(TestRunner.totalTest);
        return this.name;
    }
    static summary(){
        return TestRunner.totalPassed + "/" + TestRunner.totalTest+ " Passed";
    }
}

new TestRunner("Login",true)
new TestRunner("Signup",true)
new TestRunner("Cart",false)
new TestRunner("Checkout",true)

console.log(TestRunner.summary())
