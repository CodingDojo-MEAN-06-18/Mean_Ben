const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const port  = process.env.PORT || 8000;
// const express = require("express");

const app = express();

require('./server/config/database')

app.use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json())
  .use(express.static(path.resolve('dist/public')))
  .use('/api', require('./server/routes'))
  .use('/notes', require('./server/routes/note.routes'))







app.listen(port, ()=>console.log(`listen to port ${port}`))
