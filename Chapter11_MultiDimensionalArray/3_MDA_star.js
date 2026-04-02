//*
//**
// ***

let n = 3;
for(let i = 0; i < n; i++) { 
    let row = "";
    for(let j = 0; j <=i; j++) {
     row += "*";
    }
    console.log(row);
}

// ***
// **
// * 
let a = 3;
for (let i = a;i>0;i--){
    let row = "";
    for(let j=0;j<i;j++){
        row += "*";
    }   
    console.log(row);
}

//   *
//  ***
// *****
let m = 3;
for(let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1;j<=m-1;j++){
        row += " ";
    }
    for (let k=1;k<=2*i-1;k++){
        row += "*";
    }
    console.log(row);       
}
