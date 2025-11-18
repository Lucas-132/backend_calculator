const http = require('http');

const server = http.createServer((request, response) => {
    console.log("server created");
    response.getHeader("content-type","text/html");

    let file = "";
    if (response.url === "/"){
        file = "./index.html";
    } else if (response.urll === "/result"){
        file = "./result.html";
    } else {
        file = "./error.html"
    }
});

server.listen(3002,"localhost", () => {
    console.log("now listening port 3002");    
});

