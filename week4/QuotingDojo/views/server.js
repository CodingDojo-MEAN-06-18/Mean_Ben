const express = require('express');
const path =require('path');
const app = express();
const port =process.env.port || 8000;
const mongoose = require('mongoose');
const flash = require('express-flash')
const session = require('express-session')
var bodyParser = require('body-parser');

app.set('views', path.join(__dirname,'../views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,"./static")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(flash());
app.use(session({
  secret: 'whatever',
  resave: 'flase',
  saveUninitialized: true,
  cookie: {maxAge:60000}
}));

mongoose.connect('mongodb://localhost:27017/myquote',{ useNewUrlParser: true });

app.listen(port, ()=>console.log(`listening to port ${port}`));

// var QuoteSchema = new mongoose.Schema({
//   name:{
//     type:String,
//     required:[true,'name is required'],
//     minlength:[2,'at less one C is required'],
//     trim:true
//   },
//   quote:{
//     type:String,
//     required:[true,'quote is required'],
//     ninlength:[2,'at less one C is required'],
//     trim:true
//   }
//
// },{timestamps:true});
//
// const myQuoteCollections = mongoose.model("myQuoteCollections", QuoteSchema);


// app.get('/',function(req,res){
//   res.render('index')
// });
// app.get('/quotes',function(req,res){
//   myQuoteCollections.find()
//   .then(quotes =>{
//     console.log("getting all quotes: ",quotes);
//     res.render('quotes',{quotes})
//   })
//   .catch(console.log)
//
// });

//
// app.post('/quotes',function(req,res){
//   // console.log(req.body);
//   myQuoteCollections.create(req.body)
//     .then(quotes =>{
//       console.log("created a quote", quotes);
//       res.redirect('/');
//     })
//     .catch(error=>{
//       const errors = Object.keys(error.errors)
//         .map(key => error.errors[key].message);
//       console.log(errors);
//       req.flash('displayErrors', errors)
//       res.redirect('/')
//     })
// });
