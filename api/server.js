const express = require('express');

const notes = require('../notes/notesHelper.js');

const server = express();

server.use(express.json());

server.get('/note/get/all', (req, res) => {
  notes.getNotes()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).json(err));
});

module.exports = server;
