exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('albums', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('artist');
      table.string('image');
      table.string('tags');
      table.string('description');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('albums')
  ]);
};
