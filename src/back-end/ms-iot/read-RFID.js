
var express=require('express');
var http=require('http')
var {Server}=require( "socket.io");
const cors = require("cors");

var SerialPort = require('serialport');

const PORT = 8001 ;

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", credentials: true },
});
io.on("connection", () => {
  console.log("New client connected")
});


const parsers = SerialPort.parsers;

const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort('COM17',{ 
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

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
