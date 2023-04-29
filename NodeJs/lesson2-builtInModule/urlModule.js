const http = require("http");
const url = require("url");

const myServer = http.createServer((req, res) => {
    let myURL = "https://uhunt.onlinejudge.org/id/1126598";
    let myURLObject = url.parse(myURL, true);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(myURLObject.host);
    res.end();
});

myServer.listen(3000);
console.log("Server run successfullty");
