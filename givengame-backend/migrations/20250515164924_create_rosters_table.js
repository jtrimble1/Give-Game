/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('rosters', table => {
        table.increments('id')
        table.integer('number')
        table.string('firstname')
        table.string('lastname')
        table.integer('fundraiser_id').references('id').inTable('fundraiser').onDelete('CASCADE')
        table.decimal('raised')
        table.decimal('active')
        // table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rosters')
};
