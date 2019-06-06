var http = require('http');

var server = http.createServer( function(req, res){

    res.end("<html><body><h1>Testando server</h1></body></html>")

})

server.listen(3000);