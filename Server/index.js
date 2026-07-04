const http = require("http");
const fs = require("fs");
const url = require("url");

const myserver = http.createServer((req,res)=>{
    // console.log("Request has been made from browser");
    if(req.url === "/favicon.ico") return res.end();
   const log = `${Date.now()}: ${req.url} New Request Received\n`;
   const myurl = url.parse(req.url,true);
   console.log(myurl);
   
    fs.appendFile("log.txt", log , (err ,data) =>{
    switch(myurl.pathname){
        case "/": // /=>automatically goes to home page
            res.end("Home Page");
            break;
            case"/about":
              const username = myurl.query.myname;
              res.end(`Hi,${username}`);
                break;
                case"/contact":
                    res.end("Contact us");
                    break;
                    case"/search":
                   const search = myurl.query.search_query;
                   res.end(`Search results for ${search}`);
                  break;

                    case "/Default":
                        res.end("Error 404 Page Not Found");
                         };
                        });
     // console.log(req.headers);
});

    myserver.listen(8000,()=> console.log("Listening on port 8000..."));