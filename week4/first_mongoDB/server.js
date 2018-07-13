const express = require('express');
const path =require('path');
const app = express();
const mongoose = require('mongoose');
const port =process.env.port || 8000;

var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/basic_mongoose',{ useNewUrlParser: true });
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
  User.find({}, function(err,users){
    console.log(users);
    console.log(err);
      console.log('the length of users are:',users.length);
      for (var i of users){
        console.log(`my name is ${i.name} and i am ${i.age} old`);
      };
  });
  res.render('index')
});

mongoose.Promise = global.Promise;
app.post('/user',function(req,res){
    console.log("POST Data", req.body);
    var user = new User(
      {name:req.body.name,
        age:req.body.age
      }
    );
    user.save(function(err){
      if(err){
        console.log('something went wrong');
      }else{
        console.log('successfully added a user');
        res.redirect('/')
      };
    });

});
