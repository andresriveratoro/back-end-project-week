const db = require('../data/dbConfig.js');

module.exports = {
  getNotes: () => {
    return db('notes');
  },
};
