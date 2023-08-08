const http = require("http");
let server = http.createServer(function(req, res){
    console.log("Request ", req);
    res.write("Hello from http server");
    res.end();
});

server.listen(2020,"localhost", function(error){
    if(error){ console.log("Error ", error)}
    else{ console.log("web server is now running on localhost:2020") }
});
