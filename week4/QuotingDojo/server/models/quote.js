const mongoose = require("mongoose");
var QuoteSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'name is required'],
    minlength:[2,'at less one C is required'],
    trim:true
  },
  quote:{
    type:String,
    required:[true,'quote is required'],
    ninlength:[2,'at less one C is required'],
    trim:true
  }

},{timestamps:true});

const myQuoteCollections = mongoose.model("myQuoteCollections", QuoteSchema);

module.exports = mongoose.model("myQuoteCollections")
