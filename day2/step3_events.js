const EventEmitter = require('node:events').EventEmitter;

let hsbcEvent = new EventEmitter();

hsbcEvent.addListener("greeting", function(message){
    console.log("Greeting ", message);
});

hsbcEvent.emit("greeting","good morning");
