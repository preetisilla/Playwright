let allBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

let runningBrowser = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
console.log(runningBrowser);

console.log(`{ runnable: ${JSON.stringify(runningBrowser)}, blocked: ${JSON.stringify(blockedBrowsers)}, plan: "Run on: ${runningBrowser} | Skip: ${blockedBrowsers}" }`)