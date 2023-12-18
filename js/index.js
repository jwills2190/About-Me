// Import the HTTP and FS modules
// Create a server object
// create custom HTML files
const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === "/index.html" || req.url === "/") {
        fs.readFile("./index.html", (error, data) => {
            if(error) {
                return res.end("file not found");
            }
            res.writeHead(200, {"Content-Type": "text/html"});

            res.write(data);

            return res.end();
        });
    } else if(req.url === "/projects.html" || req.url === "/projects") {
        fs.readFile("./projects.html", (error, data) => {
            if(error) {
                return res.end("file not found");
            }
            res.writeHead(200, {"Content-Type": "text/html"});

            res.write(data);

            return res.end();
        });
    } else if(req.url === "/time.html" || req.url === "/time") {
        fs.readFile("./time.html", (error, data) => {
            if(error) {
                return res.end("file not found");
            }
            res.writeHead(200, {"Content-Type": "text/html"});

            res.write(data);

            return res.end();
        });
    } else {
        res.end(`
        <h1>404 Error: Page Not Found</h1>
        <a href="/" > Back to home page</a>`);
        return res.end();
    }
});


const PORT = 3000

server.listen(PORT, () => {
    console.log(`Server is now listening on port${PORT}`);
});