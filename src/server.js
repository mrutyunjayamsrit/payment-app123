const http = require('http');

const app = require('./app'); // index.js is default

const HOST_IP =  '127.0.0.1' ;
const PORT =  8080 ;
const NODE_ENV = 'development';

console.log('Starting server at ', HOST_IP, PORT);
console.log('Running on ', NODE_ENV);

console.log('Creating server **')
const server = http.createServer(app);
console.log('App created')
server.listen(PORT, HOST_IP, function(error){
    if (!error) {
            console.log('SERVER STARTED')
    }
})

