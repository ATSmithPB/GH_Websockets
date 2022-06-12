
const WebSocket = require('ws');

const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT
});

console.log((new Date()) + " Server is listening on port: " + PORT)
