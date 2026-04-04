function apiCall(){

return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("API response received");
    }, 2000);   
});

}

async function fetchDta(){
    let start = Date.now();
    let [r1,r2,r3] = await Promise.all([
        apiCall("https://api.example.com/data"),
        apiCall("https://api.example.com/data2"),
        apiCall("https://api.example.com/data3")
    ]);
    console.log(r1); // Output: API response received
    console.log(r2); // Output: API response received
    console.log(r3); // Output: API response received   

    console.log("All API calls completed."+ (Date.now()-start));
}

fetchDta();