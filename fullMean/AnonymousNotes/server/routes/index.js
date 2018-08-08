const noteRouter = require('./note.routes');
const router = require('express').Router();

// add "/notes" to all the routes in NoteRouter => "/notes/index, /notes/create"
module.exports = router.use('/notes', noteRouter);
