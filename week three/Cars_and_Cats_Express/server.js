
const express = require("express");
const bodyParser =require('body-parser');
const path = require('path')
const port = process.env.port || 8000;
var app = express();

app.use(bodyParser.urlencoded({extend: true}));
app.use(express.static(path.join(__dirname,'static')));
app.use(express.static(path.join(__dirname,'static','images')));
app.use(express.static(path.join(__dirname,'static','stylesheets')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');


app.get('/', function(request, response) {
   response.sendFile(__dirname + "/static/index.html");
})
app.get('/cars', function(request, response) {
   response.render("cars");
})
app.get('/cats', function(request, response) {
   response.render("cats");
})
app.get('/form', function(request, response) {
   response.render("form");
})
app.get('/cherry', function(request, response) {
  var array={
    name:"cherry",
    food:"burger",
    age:2,
    habits:['under the couch', 'in the roof'],
    img:"cherry.jpg"
  };
   response.render("details",{content:array});
})
app.get('/defunktocat', function(request, response) {
  var array={
    name:"defunktocat",
    food:"spaghetti",
    age:3,
    habits:['under the bed', 'in a sunbeam'],
    img:"defunktocat.png"
  };
   response.render("details",{content:array});
})
app.get('/cooler', function(request, response) {
  var array={
    name:"cooler",
    food:"fishes",
    age:4,
    habits:['under the chair', 'in a tub'],
    img:"cooler.png"
  };
   response.render("details",{content:array});
})
app.get('/name/:id', function(request, response) {
  console.log(request.params.id)

})



app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
