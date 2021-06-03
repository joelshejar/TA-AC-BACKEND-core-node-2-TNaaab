var http = require('http')

var queryString = require('querystring')

const path = require('path')

var server = http.createServer(handleRequest)

var server1 = http.createServer(handleRequest1)

function handleRequest1(req,res){
    var store = ''
    var dataFormat = req.headers['Content-Type']
    req.on('data', (chunk) => {
        store = store + chunk
    })
    req.on('end', () => {
        if(dataFormat === "application/json"){
            var parsedData = JSON.parse(store)
            res.end(store)
        }
        if(dataFormat === "application/text"){
            var parsedData = queryString.parse(store)
            res.end(store)
        }
    })
    
}

function handleRequest(req,res){
    var store = ''
    var relativePath = './server.js'
    var appPath = path.join(__dirname,'app.js')
    var relativeIndex = './index.html'
    var indexPath = path.join(__dirname,'index.html')
    if(req.method === 'POST' && req.url === '/'){
        res.write('Welcome')
        res.end()
    }
    req.on('data', (chunk) =>{
        store = store + chunk
    })
    req.on('end', () => {

    })


}

server1.listen(9000, ()=>{
    console.log('server is listening to port 9000')
})

server.listen(3000, ()=>{
    console.log('server listening on port 3000')
})















