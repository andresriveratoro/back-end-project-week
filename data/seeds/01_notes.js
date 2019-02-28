exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {title: 'Learn JS', textBody: 'Would you like to join JS? Click here!'},
        {title: 'Example #2', textBody: 'Text body for example #2'},
        {title: 'Note Title', textBody: 'Note Body'},
      ]);
    });
};
