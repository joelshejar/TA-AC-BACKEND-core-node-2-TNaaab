var http = require('http')

var queryString = require('querystring')

var server = http.createServer(handleRequest)
var server1 = http.createServer(handleRequest1)

function handleRequest1(req,res){
    var store = ''
    req.on('data', (chunk) => {
        store = store + chunk
    })
    req.on('end', () => {
        var parsedData = queryString.parse(store)
        // res.setHeader('Content-Type', 'text/html')
        res.end(`<h1>${parsedData.name}</h1><h2>${parsedData.email}</h2>`)
    })
}

function handleRequest(req,res){
    var store = ''
    req.on('data', (chunk) => {
        store = store + chunk
    })
    req.on('end', () => {
        var parsedData = JSON.parse(store)
        // res.setHeader('Content-Type', 'text/html')
        res.end(`<h1>${parsedData.name}</h1><h2>${parsedData.email}</h2>`)
    })

}

server.listen(4000, ()=>{
    console.log('listening on port 4000')
})

server1.listen(4444, ()=>{
    console.log('listening on port 4444')
})



















