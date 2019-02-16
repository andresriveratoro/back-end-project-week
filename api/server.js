const express = require('express');

const notes = require('../notes/notesHelper.js');

const server = express();

server.use(express.json());

server.get('/note/get/all', (req, res) => {
  notes.getNotes()
    .then(rows => res.status(200).json(rows))
    .catch(err => res.status(500).json(err));
});

server.get('/note/get/:id', (req, res) => {
  const { id } = req.params;
  notes.getNoteById(id)
    .then((row) => {
      if (row.length) res.status(200).json(row);
      else res.status(404).json({ error: 'A note with the specified ID does not exist.' });
    })
    .catch(err => res.status(500).json(err));
});

server.post('/note/create', (req, res) => {
  const { title, textBody } = req.body;
  if (!title || !textBody) res.status(400).json({ error: 'Missing required field.' });
  else {
    notes.createNote({ title, textBody })
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json(err));
  }
});

module.exports = server;
