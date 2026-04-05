class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(name + " launched");
    }

    startBrowser(){
        console.log("Starting the browser");
    }

    closeBrowser(){
        console.log("Close the Browser");
    }
}

let cb = new Browser("Chrome");
cb.startBrowser();
cb.closeBrowser();