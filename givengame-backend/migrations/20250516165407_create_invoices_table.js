/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('invoices', table => {
        table.increments('id')
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE')
        table.integer('team_id').references('id').inTable('teams').onDelete('CASCADE')
        table.string('provider_id')
        table.decimal('total')
        table.decimal('tax')
        table.string('card_country')
        table.string('billing_state')
        table.string('billing_zip')
        table.string('billing_country')
        table.string('vat_id')
        // table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('invoices')
};
