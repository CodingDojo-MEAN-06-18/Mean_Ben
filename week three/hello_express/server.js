// Load the express module and store it in the variable express (Where do you think this comes from?)
const express = require("express");
const bodyParser =require('body-parser');
const path = require('path')
const port = process.env.port || 8000;
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.set('views',path.join(__dirname,'static'));
app.use(bodyParser.urlencoded({extend: true}));
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send("<h1>Hello Express......</h1>");
})
// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
