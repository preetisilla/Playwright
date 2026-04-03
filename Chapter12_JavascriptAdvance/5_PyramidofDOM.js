function step1(callback) {
    setTimeout(function() {
        console.log("Step 1 completed");
        callback();
    }, 2000);       
}

function step2(callback) {
    setTimeout(function() {
        console.log("Step 2 completed");
        callback();
    }, 2000);       
}

function step3(callback) {
    setTimeout(function() {
        console.log("Step 3 completed");
        callback();
    }, 2000);   
}

// Calling the functions in a nested manner to ensure they execute in order
step1(function() {
    step2(function() {
        step3(function() {
            console.log("All steps completed");
        });
    });
}); 