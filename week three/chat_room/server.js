const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 8000;
const server = app.listen(port, ()=> console.log(`listening to port ${port}`));
const io = require('socket.io')(server)

app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs');

// setting up the connection event between server and clients
io.on("connection",function(socket){
    socket.on("greetings", function(data){
      console.log(data.msg)
    })
    var count=1;
    var users =[]
    socket.on('got_a_new_user',function(data){
      users.push({name:data.name, id:count++})
      console.log(users)
      // io.emit("new_user",{users})
    });
    // receive message from clients
    socket.on('send_msg',function(data){
      console.log(data)
      io.emit("updateMessage",{message:data})
    });

    io.emit("new_user",{users})

    // socket.emit("new_user",{users});
});

app.get('/',function(req, res){
  res.render('index')
});
