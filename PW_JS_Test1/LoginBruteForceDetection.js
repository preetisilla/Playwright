var attempts = ["wrong", "wrong", "wrong", "correct"];
var i = 0;
do{
    if(attempts[i] === "wrong"){
        console.log (`Attempt ${i+1}: Failed - Strike ${i+1}/3`)
    }
    else if(i==3 && attempts[i] === "correct"){
        console.log(`Attempt 4: 🔒 ACCOUNT LOCKED - Rejected`);
    }
    else if(attempts[i] === "correct"){
        console.log(`Attempt ${i+1}: ✅ Login successful - Accepted`);
    }
    i++;

}while(i<=3)