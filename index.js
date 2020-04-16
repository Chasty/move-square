var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
//var request = require('request');

var count = 0;

var users = {}

var cc = 0;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('sendMousePosition', (data)=>{
      io.emit('onSendMousePosition', data)
      console.log(data)
    })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
