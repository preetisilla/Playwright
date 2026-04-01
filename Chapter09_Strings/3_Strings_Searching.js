let url = "https://www.example.com/search?q=playwright&sort=asc&page=2";

url.includes("playwright"); // Output: true - checks if the substring "playwright" is present in the URL'
url.includes("test"); // Output: false - checks if the substring "test" is present in the URL
url.indexOf("sort=asc"); // Output: 39 - returns the index of the first occurrence of "sort=asc"
url.indexOf("sort=desc");

url.startsWith("https://"); // Output: true - checks if the URL starts with "https://"
url.endsWith("page=2"); // Output: true - checks if the URL ends with "page=2"

url.indexOf("a"); // Output: 8 - returns the index of the first occurrence of "a"
url.lastIndexOf("a");   // Output: 28 - returns the index of the last occurrence of "a"

url.search(/search/); // regex search - Output: 22 - returns the index of the first match of the regular expression "search"
