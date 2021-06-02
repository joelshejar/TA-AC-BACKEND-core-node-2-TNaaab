var http = require('http')
var fs = require('fs')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    if(req.method === 'GET' && req.url === '/'){
        res.setHeader('Content-type', 'text/plain')
        fs.createReadStream('./readme.txt').pipe(res)
    }
}

server.listen(4000,()=>{
    console.log('listening to port 4000')
})





























