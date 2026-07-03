const http = require("http");
const fs = require("fs");

const myserver = http.createServer((req,res)=>{
    // console.log("Request has been made from browser");
   const log = `${Date.now()}: ${req.url} New Request Received\n`;
   
    fs.appendFile("log.txt", log , (err ,data) =>{
    switch(req.url){
        case "/": // /=>automatically goes to home page
            res.end("Home Page");
            break;
            case"/about":
                res.end("I am Shubham Jha");
                break;
                case"/contact":
                    res.end("Contact us");
                    break;
                    case "/Default":
                        res.end("Error 404 Page Not Found");
                         };
                        });
     // console.log(req.headers);
});

    myserver.listen(8000,()=> console.log("Listening on port 8000..."));