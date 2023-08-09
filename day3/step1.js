const http = require("http");
const fs = require("fs");
const port = process.argv[2] || 3000;

const heroes = ["Batman","Superman","Aquaman", "Cyborg","Wonder women", "Flash"];

setInterval(()=>{
    fs.appendFileSync("job.txt", Math.round( Math.random() * 100 )+"\n", "utf-8" )
},2000);


let server = http.createServer((req, res)=>{
    let favHero = Math.floor(Math.random() * heroes.length);
    let message = {
        selectedHero : heroes[favHero],
        port, 
        processid : process.pid
    };
    res.writeHead(200, { "Content-Type":"text/plain" });
    res.end(JSON.stringify(message));
});

server.listen(port);
console.log("server is now live on localhost:",port);
