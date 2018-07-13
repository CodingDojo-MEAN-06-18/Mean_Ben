const express = require('express');
const path =require('path');
const app = express();
const mongoose = require('mongoose');
const port =process.env.port || 8000;

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.model("User",UserSchema);
var User = mongoose.model("User")

app.use(express.static(path.join(__dirname,"./static")));
app.use(bodyParser.urlencoded({extended:true}));

app.set('views', path.join(__dirname,"./views"));
app.set("view engine","ejs");

app.listen(port, ()=>console.log(`listening to port ${port}`));

//routes

app.get('/',function(req,res){
  res.render('index')
});

app.post('/user',function(req,res){
    console.log("POST Data", req.body);
    res.redirect('/')
});
