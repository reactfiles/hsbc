const express = require("express");
let app = express();
app.get("/", function(req, res){
    res.send("Hello from express")
})
app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Server is now live on localhost:5050");
    }
});


++++++++++++++++++++++++++++++++++++++++++++++++++++++++



const express = require("express");
let app = express();
app.get("/", function(req, res){
    res.send("Hello from express")
})
app.get("/:hsbc", function(req, res){
    console.log("you said", req.params.hsbc);
    // res.end();
    res.redirect("/");
})
app.listen(5050,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("Server is now live on localhost:5050");
    }
});
