setTimeout(function(){
    console.log("1 setTimeout was called")
},0);

process.nextTick(function(){
    console.log("2 process.nextTick was called");
});

setImmediate(function(){
   console.log("3 setImmediate was called");
});

Promise.resolve(function(){
    console.log("4 promise was resolved");
})