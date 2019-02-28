const db = require('../data/dbConfig.js');

module.exports = {
  getNotes: () => {
    return db('notes');
  },

  getNoteById: (id) => {
    return db('notes').where('id', id);
  },

  createNote: (note) => {
    return db('notes').insert(note);
  },

  editNote: (note) => {
    return db('notes').where('id', note.id).update(note);
  },

  deleteNote: (id) => {
    return db('notes').where('id', id).del();
  },
};
