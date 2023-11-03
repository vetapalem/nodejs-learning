let http = require('http'); // require() accessing module http is a module


var dat= require('./first_modules'); // importing modules in this way...

http.createServer(
    function(reques,response){
        response.writeHead(200,{'content-Type':'text/html'});// this is http header...
        response.end(`${"<h1>hello world</h1>"}\n <h2>${dat.datetime()}</h2>\n <h1><q>${reques.url}</q></h1>`);
        // response.write(reques.url)
        // response.end(`<h1>${reques.url}</h1>`)
        // console.log(reques.url)
        // console.log()
        // creating log information ..
        console.log(`${'http://127.0.0.1:3000'}\t${reques.method}\t${Date()}\t ${reques.url}`)
        // console.log(reques.headers,reques.method)
    }
).listen(3000)
console.log(`${'http://127.0.0.1:3000'} \t ${"reques.url"}`)
