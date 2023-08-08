const http = require("http");

let gangOfFour = [];

let outPerformer = ()=>{
    for(let i = 0; i < 10**10; i++){
       gangOfFour.push(["one","two","three","four"]);
    }
}

let server = http.createServer(function(req, res){
    if(req.url == "/"){
        res.writeHead(200, { "Content-Type" : "text/plain" });
        outPerformer()
        res.end("Hello from home page value of i is "+gangOfFour.length);
    }else{
        res.writeHead(200, { "Content-Type" : "text/plain" });
        res.end("Hello from other pages");
    }
});

server.listen(2020,"localhost", function(error){
    if(error){ console.log("Error ", error)}
    else{ console.log("web server is now running on localhost:2020") }
});
