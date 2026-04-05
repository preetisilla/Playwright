class APIClient {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    getPath(path){
        return this.baseURL + path;
    }

}

let staging = new APIClient("https://staging.api.com");
console.log(staging.getPath("/users"));