const http = require("http");

const myServer = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>Home page</h1>');
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>About page</h1>');
        res.end();
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write('<h1>Contact page</h1>');
        res.end();
    }
});

myServer.listen(3000);
console.log("Server run successfullty");
