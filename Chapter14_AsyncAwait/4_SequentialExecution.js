function apiCall(){

return new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("API response received");
    }, 2000);   
});

}

async function fetchDta(){
    let start = Date.now();
    let response = await apiCall("https://api.example.com/data");
    console.log(response); // Output: API response received

    let r2 = await apiCall("https://api.example.com/data2");
    console.log(r2); // Output: API response received   

    let r3 = await apiCall("https://api.example.com/data3");
    console.log(r3); // Output: API response received

    console.log("All API calls completed."+ (Date.now()-start));
}

fetchDta();