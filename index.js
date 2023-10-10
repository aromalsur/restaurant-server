// 1.  import json-server
const jsonserver=require('json-server')

// 2. create a server application using jsonserver
const server=jsonserver.create()

// 3. set up path for db.json file
const router=jsonserver.router('db.json')

// 4.return a middelware used by jsonserver
const middelware=jsonserver.defaults()

// 5.setup a port number
const port= process.env.PORT || 3001

// 6. use in server
server.use(middelware)
server.use(router) 

// 7.To run the port
server.listen(port,()=>{
    console.log('listening on port'+port);
})