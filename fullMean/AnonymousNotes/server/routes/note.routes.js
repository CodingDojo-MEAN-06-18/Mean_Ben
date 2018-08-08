const NoteController = require('../controllers/notes');
const router = require('express').Router();

// "notes/"

module.exports = router
  .get('/',NoteController.index)
  .post('/',NoteController.create)
