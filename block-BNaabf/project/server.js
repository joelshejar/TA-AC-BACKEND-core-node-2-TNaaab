var http = require('http')
var fs = require('fs')

var qs = require('querystring')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var store = ''
    if(req.method === 'GET' && req.url === '/form'){
        res.setHeader('Content-Type', 'text/html')
        fs.createReadStream('./form.html').pipe(res)
    }
    req.on('data',(chunk)=>{
        store = store + chunk
    })
    req.on('end', ()=>{
        var formData = qs.parse(store)
        res.end(store)
    })
}


server.listen(5678, ()=>{
    console.log('server listening on port 5678')
})

























