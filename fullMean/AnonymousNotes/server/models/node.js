const mongoose = require('mongoose');
const {Schema} = mongoose;

const noteSchema = new Schema({
  note:{
    type: String,
    require: true,
    trim: true
  }
}, {timestamps:true});

module.exports= mongoose.model("Note", noteSchema);
