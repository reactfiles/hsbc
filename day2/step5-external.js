// console.log("hello from my module");
let axios = require("axios");
let fs = require("fs");

// https://www.npmjs.com/package/axios#request-config

axios.get("http://hsbc.co.in")
.then(res => {
    fs.writeFile("pages/temp.html",res.data,"utf-8",
    function(error){
        if(error){
            console.log("File write Error", error)
        }else{
            console.log("File written");
        }
    })
})
.catch(err => console.log("Network access Error", err));

// node --watch index.js
// nodemon 
