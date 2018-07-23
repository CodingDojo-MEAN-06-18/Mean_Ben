const mongoose = require('mongoose');
const path = require('path');
const reg = new RegExp('.js$', 'i');
const fs = require("fs");
const modelsPath = path.resolve('server','models');
// const modelsPath = path.join(__dirname, "..", "models")
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/quotes');
mongoose.connection.on('connected', () => console.log('MongoDB connected'));

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
})
