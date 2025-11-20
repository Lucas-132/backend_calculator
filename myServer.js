const fs = require('fs');
const http = require('http');
import {calculate} from './calculate.js';

const server = http.createServer((request, response) => {
    console.log("request successful");
    response.getHeader("content-type","text/html");

    let filePath = "";
    if (request.url === "/"){
        filePath = "./html/index.html";
    } else if (request.url === "/result"){

        filePath = "./html/result.html";
        let myData = request.POST;
        console.log(myData);

    } else {
        filePath = "./html/error.html";
    }

    console.log(request.url);
    console.log(filePath);

    fs.readFile(filePath, (error,data) =>{
        if (error){
            console.log("error");
            response.end();
        } else {
            response.end(data);
        }
    });
});

server.listen(3002,"localhost", () => {
    console.log("now listening port 3002");    
});

