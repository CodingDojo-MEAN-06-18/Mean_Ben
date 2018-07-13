const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const port = process.env.port || 8000;
const server = app.listen(port, () => console.log(`listening to on port ${port}`));
const io = require('socket.io')(server);


io.on('connection', function (socket) { //2

  socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });

  socket.on('post_form', function(data) {
    console.log(data)
    // console.log(data.location)
    var random_num = Math.floor(Math.random()*1001);
    console.log("accepting post form from client");
    socket.emit("updated_message",{msg:`you have emitted data to server: ${data}`});
    socket.emit("random_num",{num:random_num});
    console.log(random_num)

  });
});
