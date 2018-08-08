const Note = require('mongoose').model('Note');

module.exports = {
  // get all notes
  index(req,res){
    Note.find({})
      .then(notes => res.json(notes))
      .catch(console.log)
    },
  // create a note
  create(req, res){
    Note.create(req.body)
      .then(note =>res.json(note))
      .catch(console.log)
  },


}
