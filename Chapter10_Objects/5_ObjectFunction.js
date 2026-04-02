const user = {
    name: "Alice",
    age: 30
}

const calculator = {
    value : 0,
    add(num) {
        this.value += num;
        return this;
    },
    subtract(num) {
        this.value -= num;
        return this;
    }
} //calculator object with methods for addition and subtraction that return the calculator object itself to allow method chaining

console.log(calculator.add(10).subtract(5).add(20).value); // Output: 25 - demonstrates method chaining by calling multiple methods in a single expression