const express = require("express");
const app = express()
const http = require("http")
const {Server} = require("socket.io")
const cors = require("cors");
app.use(cors());


const server = http.createServer(app)
const io = new Server(server,{ 
    cors: {
      origin: "http://localhost:3000",
      credentials:true,
    }
}) 

io.on("connection",()=>{
    console.log("a user connected: ")
    
   
    

  })






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

parser.on('data', function(data) {
    console.log('Received data from port: ' + data);
   io.emit('data', data);
    
    
});

server.listen(5000, err=> {
    if(err) console.log(err)
    console.log("Server running on Port ", 5000)
  })
