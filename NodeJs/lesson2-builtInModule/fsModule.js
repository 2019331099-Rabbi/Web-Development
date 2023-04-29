const fs = require("fs");
const http = require("http");


// asynchronous -> writeFile
// let myServer = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.writeFile("demo.txt", "Hello this is Fazla Rabbi", (err) => {
//             if (err) {
//                 res.writeHead(202, { "Content-Type": "text/html" });
//                 res.write('File write failed');
//                 res.end();
//             }
//             else {
//                 res.writeHead(202, { "Content-Type": "text/html" });
//                 res.write('file write success');
//                 res.end();
//             }
//         });
//     }
// });


// synchronous -> writeFile
// let myServer = http.createServer((req, res) => {
//     if (req.url === "/") {
//         let error = fs.writeFileSync("demoSync.txt", "Hello, this is Fazla Rabbi");
//         if (error) {
//             res.writeHead(202, { "Content-Type": "text/html" });
//             res.write('File write failed');
//             res.end();
//         }
//         else {
//             res.writeHead(202, { "Content-Type": "text/html" });
//             res.write('file write success');
//             res.end();
//         }
//     }
// });


// fs.appendFile('demo1.txt', 'I am 23 years old', (err) => {
//     if (err) log(err);
//     else console.log("successfull");
// });

// fs.readFile("demo1.txt", "UTF-8", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);
// });



// asynchronous -> rename
// fs.rename("demo1.txt", "demo2.txt", (err) => {
//     if (err) log(err);
//     else console.log("successfull");
// });


// synchronous -> rename
// let myServer = http.createServer((req, res) => {
//     if (req.url === "/") {
//         let error = fs.renameSync("demoSync.txt", "demoSyncnew.txt");
//         if (error) {
//             res.writeHead(202, { "Content-Type": "text/html" });
//             res.write('File rename failed');
//             res.end();
//         }
//         else {
//             res.writeHead(202, { "Content-Type": "text/html" });
//             res.write('file rename success');
//             res.end();
//         }
//     }
// });

// fs.unlink('demo2.txt', (err) => {
//     if (err) console.log(err);
//     else console.log('successfull');
// });



// asynchronous -> exists
// let myServer = http.createServer((req, res) => {
//     if (req.url === '/') {
//             fs.exists('abc.txt', (result) => {
//             if (result) res.end('File aseee');
//             else res.end('File naiiii');
//         });
//     }
// });

// synchronous -> exists
let myServer = http.createServer((req, res) => {
    if (req.url === '/') {
        let result = fs.existsSync('abc.txt');
        if (result) res.end('file aseeeee');
        else res.end('file naiiii');
    }
});


// if (fs.existsSync('demo2.txt')) console.log('found');
// else console.log('not found');

// First webpage using node js

// asynchronous
// let myServer = http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("home.html", (err, data) => {
//             res.writeHead(202, { "Content-Type": "text/html" });
//             res.write(data);
//             res.end();
//         });
//     }
// });


//synchronous
// let myServer = http.createServer((req, res) => {
//     if (req.url === "/") {
//         let myData = fs.readFileSync("home.html");
//         res.writeHead(202, { "Content-Type": "text/html" });
//         res.write(myData);
//         res.end();
//     }
// });

myServer.listen(3000);
console.log("Server run successfully");
