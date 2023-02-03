var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);




io.on('connection', (socket)=> {
      console.log('User Online');
      function onConnection(socket){
            socket.on('drawing', function(data){
              socket.broadcast.emit('drawing', data);
              console.log(data);
            });
            socket.on('Clearboard', function(data){
              socket.broadcast.emit('Clearboard', data);
              console.log(data);
            });
      }
      socket.on('canvas-data', (data)=> {
            socket.broadcast.emit('canvas-data', data);
            
      })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
http.listen(server_port, () => {
    console.log("Started on : "+ server_port);
})