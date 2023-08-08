let os = require("os");
console.log(os.arch());
console.log(os.totalmem()); // bytes
console.log(os.freemem()); // bytes
console.log(os.cpus().length);// 