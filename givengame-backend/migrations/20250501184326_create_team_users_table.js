/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('team_users', table => {
    table.increments('id')

    table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')

    table.integer('team_id').references('id').inTable('teams').onDelete('CASCADE')

    // Prevent duplicate team members
    table.unique(['user_id', 'team_id'])
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .alterTable('team_users', table => {
        table.dropForeign('user_id')
        table.dropForeign('team_id')
    })
    .then(() => {
        return knex.schema.dropTableIfExists('team_users')
    })
};
