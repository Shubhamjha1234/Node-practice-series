//const http = require("http");
const express = require("express");

const app = express(); //app is handler function internally
 
app.get("/", (req, res) => {
    res.send("Hello From Home Page");
});

app.get("/about", (req, res) => {
    res.send("Hello From About Page"+ "Hey" + req.query.name+ "Your Age is "+ req.query.age);
});



//const myserver = http.createServer(myHandler);

    app.listen(8000,()=> console.log("Server Started!"));