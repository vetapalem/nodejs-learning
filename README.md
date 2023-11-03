# **Node learning**

learning stage -1

simple create a server by help of  nodejs

---



learning stage -2

* http headers

```
response.writeHead(200,{'content-Type':'text/html'});// this is http header...
```

---



learning stage -3

how export module's in node js ?

> exports object

ex:-

**first_modules.js ---->file name**

_________

```
exports.datetime= functionlinker(){    returnDate()}; //exporting
```

exports.`<object>`

import object

```
var dat= require('./first_modules');// importing of object
```
