<<<<<<< HEAD:src/back-end/ms-iot/Read-RFID.js
const express = require("express");
const socketIo = require("socket.io")
const http = require("http")
const app = express()
const cors = require("cors");
app.use(cors());
const server = http.createServer(app)
const io = socketIo(server,{ 
    cors: {
      origin: "http://localhost:3000"
    }
}) //in case server and client run on different urls
io.on("connection",(socket)=>{
    console.log("client connected: ",socket.id)
    
    socket.join("clock-room")
    

  })





=======
var http = require('http');
var fs = require('fs');
var amqp = require('amqplib/callback_api')
var index = fs.readFileSync( 'index.html');
>>>>>>> 1cf51db8f0a1aa7597891593158a2b84943476dc:src/back-end/ms-iot/read-RFID.js

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
   delimiter: '\r\n'
});

var port = new SerialPort('COM11',{ 
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

/**var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
   res.end(index);
});


var io = require('socket.io').listen(app);**/

/**io.on('connection', function(socket) {
    
    console.log('Node is listening to port');
    
});**/

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
<<<<<<< HEAD:src/back-end/ms-iot/Read-RFID.js

    io.to("clock-room").emit('data', data);
    
});

server.listen(5000, err=> {
    if(err) console.log(err)
    console.log("Server running on Port ", 5000)
  })
=======
    io.emit('data', data);
    
});
app.listen(3001);
>>>>>>> 1cf51db8f0a1aa7597891593158a2b84943476dc:src/back-end/ms-iot/read-RFID.js
