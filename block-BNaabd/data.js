var http = require('http')

var queryString = require('querystring')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    var dataFormat  = req.headers['Content-type']
    var store = ''
    req.on('data', (chunk)=>{
        store = store + chunk
    })
    req.on('end', ()=>{
        if(dataFormat === 'application/json'){
            var parsedData = JSON.parse(store)
            res.end(store)
        }
        else if(dataFormat === 'application/string'){
            var parsedData = queryString.parse(store)
            res.end(store)
        }
    })
}

server.listen(7000,()=>{
    console.log('server listening on port 7000')
})



















