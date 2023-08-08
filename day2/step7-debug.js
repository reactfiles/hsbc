const http = require("http");
let server = http.createServer(function(req, res){
    if(req.url == "/"){
        res.writeHead(200, { "Content-Type" : "text/plain" });
        let tempi = 0;
        for(let i = 0; i < 10**10; i++){
            tempi = i;
        }
        res.end("Hello from home page value of i is "+tempi);
    }else{
        res.writeHead(200, { "Content-Type" : "text/plain" });
        res.end("Hello from other pages");
    }
});

server.listen(2020,"localhost", function(error){
    if(error){ console.log("Error ", error)}
    else{ console.log("web server is now running on localhost:2020") }
});
