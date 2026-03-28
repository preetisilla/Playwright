// var 
// let
// const

// var is function scoped
// let and const are block scoped      

function test(){
     var name = "Preeti";
    console.log(name);
    if(true){
        var name = "John";
        console.log(name);
    }
    console.log(name);
}
test();

function test2(){
    let name = "PreetiS";
   console.log(name);   
   if(true){    
         let name = "JohnL"; 
        console.log(name);
    }
    console.log(name);
}
test2();