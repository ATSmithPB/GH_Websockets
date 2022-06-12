// Imports
const WebSocket = require('ws');

// Variables
const serverAddress = "ws://127.0.0.1:5000";
const ws = new WebSocket(serverAddress);

// Functions

ws.on('open', function(){
    ws.send("Hello Server!");
});

ws.on('message', function(msg){
    console.log("Received msg from the server:" + msg);
});