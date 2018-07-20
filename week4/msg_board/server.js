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

mongoose.connect('mongodb://localhost:27017/dashboard',{ useNewUrlParser: true });
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

app.listen(port, ()=>{console.log(`listening to port ${port}`)});

var commentSchema = new mongoose.Schema({
  name:{type:String, required:[true,"name is required"],trim:true},
  text:String,
},{timestapms: true});

var postSchema = new mongoose.Schema({
  name:{type:String, required:[true,"name is required"],trim:true},
  message:{type:String,required:[true,"message can't be empty "], trim:true},
  comments:[{type:mongoose.Schema.Types.ObjectId, ref:"comment"}]
},{timestapms:true})


const comment = mongoose.model("comment",commentSchema);
const post = mongoose.model("post",postSchema);


app.get("/", function (req,res) {
  post.find({})
  .populate('comments')
  .then(messages =>{
    console.log("---------------->",messages);
    res.render('index',{messages})
  })
  // comment.find({})
  // .then(comments =>{
  //   console.log("comments---------------->",comments);
  //   res.render('index',{comments})
  // })
  .catch(console.log)
})

app.post("/create", function (req,res) {
  console.log(req.body);
  post.create(req.body)
  .then(message =>{
    console.log(message);
    res.redirect('/')
  })
  .catch(console.log)
})
app.post("/comment/:id", function (req,res) {
  console.log(req.body);
  console.log("===================",req.params.id,"++++++++++++++++");
  comment.create(req.body)
  .then(comment =>{
    return post.findById(req.params.id)
    .then(post =>{
      post.comments.push(comment.id)
      return post.save()
    })
    .then(()=> res.redirect('/'))

  })
  .catch(console.log)

})
