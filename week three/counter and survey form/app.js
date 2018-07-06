
const express = require("express");
const bodyParser =require('body-parser');
const path = require('path')
const port = process.env.port || 8000;
var session = require('express-session');
var app = express();

app.use(session({
  secret:"thisisascretkey",
  resave:false,
  saveUninitialized:true,
  cookie: {maxAge: 60000}
}));
app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname,'static')));
app.use(express.static(path.join(__dirname,'static','images')));
app.use(express.static(path.join(__dirname,'static','stylesheets')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

session.counter=1
app.get('/', function(request, response) {
    request.session.counter+=1
    console.log(request.session.counter)
    response.render("index",{"counter":request.session.counter});
})


app.post('/process', function(request, response) {
  console.log(request.body)
  var form_data={
    name:request.body.name,
    location:request.body.location,
    favor:request.body.favor,
    comment:request.body.comment
  }
   response.render("result",{"data":form_data});
})
app.get('/reset', function(request, response) {
    //request.session.counter=0
    request.session.destroy()
    response.redirect("/");
})



app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
