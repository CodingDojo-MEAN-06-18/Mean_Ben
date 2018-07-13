const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 8000;
const server = app.listen(port, ()=> console.log(`listening to port ${port}`));
const io = require('socket.io')(server);

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')
// setting up the connection to clients

var count = 0;
io.on('connection', function(socket){
    socket.on('greetings', function(data){
    });

    socket.on('pushButton', function(){
      io.emit('updateCount',++count);//1
    });

    socket.on('resetButton', function(){
      io.emit('updateCount', count=0); //2
    });
    // add below line so that new user will receive update right away.
    socket.emit('updateCount',++count);

});

// refactor 1, and 2
// function countUpdate(number){
//   io.emit('updateCount', number=0);
// };
app.get('/',function(req, res){
  res.render('index')
});
