let http = require('http'); // require() accessing module http is a module


var dat= require('./first_modules'); // importing modules in this way...

http.createServer(
    function(reques,response){
        response.writeHead(200,{'content-Type':'text/html'});
        response.end(`${"<h1>hello world</h1>"} ${dat.datetime()}`);
        // response.write(reques.url)
        // response.end(`<h1>${reques.url}</h1>`)
        console.log(reques.url)
    }
).listen(3000)
console.log(`${'http://127.0.0.1:3000'} \n ${"reques.url"}`)