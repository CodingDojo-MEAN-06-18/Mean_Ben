 =require('../models/quote.js')

// All necessary requires, such as the Quote model.
module.exports = {
    index: function(req, res) {
    	res.render('index')

    },
    post_quotes: function(req, res) {
      myQuoteCollections.create(req.body)
        .then(quotes =>{
          console.log("created a quote", quotes);
          res.redirect('/');
        })
        .catch(error=>{
          const errors = Object.keys(error.errors)
            .map(key => error.errors[key].message);
          console.log(errors);
          req.flash('displayErrors', errors)
          res.redirect('/')
        })
    }
    get_quotes: function(req, res) {
      myQuoteCollections.find()
      .then(quotes =>{
        console.log("getting all quotes: ",quotes);
        res.render('quotes',{quotes})
      })
      .catch(console.log)
    }
};
