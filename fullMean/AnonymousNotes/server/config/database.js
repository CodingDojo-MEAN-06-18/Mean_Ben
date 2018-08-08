const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const reg = new RegExp('\\.js$','i');
const modelPath = path.join(__dirname,"../models");

mongoose.connect(
  // create notes collection in database
  'mongodb://localhost:27017/notes',
  {
    useNewUrlParser: true,
  }
);

mongoose.connection.on("connected", ()=>console.log('connected to mongodb'));

fs.readdirSync(modelPath).forEach(file =>{
  if(reg.test(file)){
    require(path.join(modelPath,file));
  }
})
