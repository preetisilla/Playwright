function outer(){
    let message = "Hello";
    console.log("Outer Called");
    function inner(){
        console.log(message); // Accessing variable from outer function
        console.log("Inner Called");
    }
    return inner;
}

let fn_inner = outer();
fn_inner(); // Output: Hello, Inner Called