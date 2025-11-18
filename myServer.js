const http = require('http');

const server = http.createServer((request, response) => {
    console.log("server created");
});

server.listen(3002,"localhost", () => {
    console.log("now listening port 3002");
});