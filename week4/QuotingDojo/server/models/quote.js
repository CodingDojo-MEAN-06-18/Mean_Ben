const mongoose = require("mongoose");
const {Schema} = mongoose;
var QuoteSchema = new mongoose({
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
