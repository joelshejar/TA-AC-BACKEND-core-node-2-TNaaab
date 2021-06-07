var http = require('http')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var store = ''
    req.on('data', (chunk)=>{
        store = store + chunk
    })
    req.on('end',()=>{
        
    })
}

server.listen(4000, ()=>{
    console.log('server is listening to port 4000')
})

























