var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var store = ''
    req.on('data', (chunk)=>{
        store = store + chunk
    })
    req.on('end',()=>{
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.write(store)
        res.end()
    })
}



server.listen(3456, ()=>{
    console.log('server is listening to port 3456')
})











