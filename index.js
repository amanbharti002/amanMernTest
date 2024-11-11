require('./src/db/database')
const app = require('./app')
const http = require('http');
const PORT = 8081;
const HOST = "localhost";
const server = http.createServer(app)
server.listen(PORT,()=>{
    console.log(`${HOST}:${PORT}`)
    console.log('Server is running on  port');
    
})



