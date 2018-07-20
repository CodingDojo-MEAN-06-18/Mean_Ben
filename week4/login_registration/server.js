const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const path = require('path');
const port = process.env.port || 8000;
const mongoose = require('mongoose');
const app = express();

app.use(flash());
app.use(express.static(path.join(__dirname,"static")))
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  secret: 'whatever',
  resave: 'flase',
  saveUninitialized: true,
  cookie: {maxAge:60000}
}));

app.set("views", path.join(__dirname,"./views"));
app.set("view engine","ejs");

mongoose.connect('mongodb://localhost:27017/login',{ useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

var commentSchema = new mongoose.Schema({
  name:{type: String},
  comment:{type: String, required:true,trim:true},
},{timestapms:true});
var postSchema = new mongoose.Schema({
  post:{type: String, required:true,trim:true},
  comments:[{type:mongoose.Schema.Types.ObjectId, ref:"comment"}]
},{timestapms:true});

var userSchema = new mongoose.Schema({
  posts:[{type:mongoose.Schema.Types.ObjectId, ref:"Post"}],
  email:{
    type:String,
    required:[true,'email can not be empty'],
    trim:true
  },
  first_name:{
    type:String,
    required:[true,'first_name can not be empty'],
    trim:true
  },
  last_name:{
    type:String,
    required:[true,'last_name can not be empty'],
    trim:true
  },
  password:{
    type:Number,
    required:[true,'password can not be empty'],
    trim:true
  },
  birthday:{
    type:Date,
    required:[true,'birthday can not be empty'],
    trim:true
  }
},{timestapms:true});

const Post = mongoose.model("Post",postSchema)
const Comment = mongoose.model("Comment",commentSchema)
const User = mongoose.model("User",userSchema)

app.listen(port, ()=>{console.log(`listening to port ${port}`)});

app.get('/', function(req, res){
  res.render('index')
});

app.get('/all', function(req, res){
  User.find({})
  .then(users =>{
    res.render('display',{users})
  })
  .catch(console.log)

});

app.post('/registrar', function(req, res){
//  console.log(req.body);
  User.create(req.body)
  .then(user =>{
    //console.log(user);
    req.flash("success", 'registrar successfully!')
    res.redirect('/')
  })
  .catch(error =>{
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message)
      console.log(errors);
      req.flash('errors',errors)
      res.redirect('/')
  })

});

app.post('/login/create',function(){});

app.post('/login', function(req, res){
  //console.log(req.body);
  User.findOne({
    email: req.body.email,
    password: req.body.password
  }, function(error,user){
    if(error){
      console.log(error);
      res.redirect('/')
    }
    else{
      if(user){
        //console.log(user);
        req.session.user = user;
  		  // req.session.email = user.email;
        res.render('login',{"user":req.session.user});
      }
      else {
        req.flash('errors',"incorrect credentials");
        res.redirect('/');
      }

    }
  })

  app.get("/logout",function(req, res){
    req.session.destroy();
    // req.flash("logout", "you have successfully logout!")
    res.redirect('/')
  });

  app.post('/process/:id', function(req, res){
    console.log(req.body);
    Post.create(req.body)
    .then(post =>{
      return User.findById(req.params.id)
      .then(user =>{
        user.posts.push(post.id)
        return User.save()
      })
      .then(() => res.redirect('/wall'))
    })


    res.redirect('/wall')
  });


  app.get('/wall', function(req, res){
    User.find({})
    .populate('posts')
    .then(users =>{
      console.log(users);
      res.render('wall')
    })
    .catch(console.log)

  });
  // .then(user =>{
  //   if(!user) throw newError("no such credentials")
  //
  // })
  // .catch(error=>{
  //   const errors = Object.keys(error.errors)
  //   .map(key => error.errors[key].message)
  //   req.flash('errors', errors)
  //   res.redirect('/login')
  // })
});
