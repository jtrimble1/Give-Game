/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notifications', table => {
        table.increments('id')
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
        table.string('created_by')
        table.string('icon')
        table.string('body')
        table.string('action_text')
        table.string('action_url')
        table.integer('read')
        // table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('notifications')
};
