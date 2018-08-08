const Note = require('mongoose').model('Note');

module.exports = {
  // get all notes
  index(res,req){
    Note.find({})
      .then(books => res.json(books))
      .catch(console.log)
    },
  // create a note
  create(res,req){
    Note.create(req.body)
      .then(note =>res.json(note))
      .catch(console.log)
  },
  // index(res,req){},
  // index(res,req){}

}
