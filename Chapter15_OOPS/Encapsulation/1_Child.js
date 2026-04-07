class Person{
    //Hide your children
    #child1;
    #child2;

    constructor(name,ch1,ch2){
        this.name = name;
        this.#child1 = ch1;
        this.#child2 = ch2;
    }

    //getter setter
    getChild1(){
        return this.#child1;
    }

    getChild2(){
        return this.#child2;
    }

    setChild1(childName1){
        this.#child1 = childName1;
    }
    setChild2(childName2){
        this.#child2 = childName2;
    }
}
let p = new Person("Preeti","Boy","Girl");
console.log(p.name);
console.log(p.getChild1())
console.log(p.getChild2())

p.setChild1("Priyansh")
p.setChild2("Pranit")

console.log(p.getChild1())
console.log(p.getChild2())

