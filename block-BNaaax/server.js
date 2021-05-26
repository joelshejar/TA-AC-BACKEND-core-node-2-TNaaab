var http = require('http')
const path = require('path')

var server = http.createServer(handleRequest)

function handleRequest(req,res){
    console.log(__dirname)
    console.log(__filename)
    const indexPath = path.join(__dirname, 'server.js') 
}


server.listen(4000, ()=>{
    console.log('listening to port 4000')
})

















