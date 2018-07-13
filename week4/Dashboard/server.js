// configuraiton
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.port || 8000;
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const app = express();

app.use(express.static(path.join(__dirname,"static")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(flash());
app.use(session({
  secret: 'whatever',
  resave: 'flase',
  saveUninitialized: true,
  cookie: {maxAge:60000}
}));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine','ejs');

mongoose.connect('mongodb://localhost:27017/myquote',{ useNewUrlParser: true });

app.listen(port, ()=>console.log(`listening to port ${port}, up and running`))

// schema steup
var animalSchema = new mongoose.Schema({
  name:{
    type:String,
    required: [true,'animal name can not be empty'],
    trim:true
  },
  leg:{
    type: Number,
    required:[true,'leg is required'],
    trim:true
  },
  habit:{
    type: String
  },

},{timestapms:true});

const animal = mongoose.model("animal", animalSchema);

// routes

app.get('/', function(req, res){
  animal.find()
  .then(animals =>{
    // console.log('collection------------------>',animals);
    res.render('index',{animals});
  })
  .catch()
});
// app.get('/:id', function(req, res){});
app.get('/new', function(req, res){
  res.render('new');
});
// create
app.post('/create', function(req, res){
  console.log(req.body);
  animal.create(req.body)
  .then(animal=>{
    // console.log('just create an animal called: ',animal);
    res.redirect('/')
  })
  .catch(error=>{
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message)
      req.flash('errors', errors)
    res.redirect("/new");
  })
});
// show
app.get('/show/:id', function(req, res){
  animal.find({_id:req.params.id},function(error, result){
    if (error){console.log(error)}
    res.render('show',{"results":result[0]})
  });
});
// edit
app.get('/edit/:id', function(req, res){
  animal.find({_id:req.params.id})
  .then(result=>{
    // console.log("$$$$$$$$$$$$$",result);
    res.render('edit',{"results":result[0]})
  })
  .catch(console.log)
});
//update
app.post('/update/:id', function(req, res){
  animal.update({_id:req.params.id},req.body)
  .then(result=>{
    req.flash("success", 'updated successfully!')
    res.redirect('/')
    // res.render('edit',{"results":result[0]})
  })
  .catch(error=>{
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message)
      req.flash('errors', errors)
      res.redirect('/')
    });
});
//destroy
app.get('/destroy/:id', function(req, res){
  animal.remove({_id:req.params.id})
  .then(result=>{
    req.flash("success", 'deleted successfully!')
    res.redirect('/')
    // res.render('edit',{"results":result[0]})
  })
  .catch(error=>{
    const errors = Object.keys(error.errors)
      .map(key => error.errors[key].message)
      req.flash('errors', errors)
      res.redirect('/')
    });
});
