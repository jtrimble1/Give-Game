/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('teams', table => {
        table.increments('id')
        table.string('team_name')
        table.integer('team_size')
        table.string('sport').notNullable();
        // table.string('team_members')
        // table.integer('user_id')
        // table.foreign('user_id').references('users.id')
        table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('teams', table => {
        table.dropForeign('school_id');
    })
    .then(() => {
        return knex.schema.dropTableIfExists('teams')
    })
};
