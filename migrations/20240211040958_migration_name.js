
exports.up = function(knex) {
  return knex.schema
  .createTable('users', function (table) {
      table.increments('id');
      table.string('name', 100).notNullable();
      table.string('email', 75).notNullable();
      table.string('phone_number', 75).notNullable();
      table.string('address', 255);
      table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTable("users");
};
