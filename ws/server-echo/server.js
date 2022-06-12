// Imports
const WebSocket = require('ws');

// Variables
const PORT = 5000;

const wsServer = new WebSocket.Server({
    port: PORT
});

wsServer.on('connection', function (socket){
    // Some feedback on the console
    console.log("A client just connected!");

    // Attach some behavior to the incoming socket
    socket.on('message', function (msg){
        // Echo input from any client
        console.log("Received message from client: " + msg);
        socket.send("Echo: " + msg);

        // Broadcast msg to all connected clients
        wsServer.clients.forEach(function (client){
            client.send("Someone said: " + msg);
        });

    });

});


console.log((new Date()) + " Server is listening on port: " + PORT)
