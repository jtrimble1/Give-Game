/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('transactions', table => {
        table.increments('id')
        table.bigInteger('transaction_id')
        table.integer('donation_to_id')
        table.string('donation_to_name')
        table.decimal('donation_amount')
        table.decimal('towards_fundraiser')
        table.decimal('towards_support')
        table.boolean('transaction_complete')
        table.string('confirmation_id')
        table.string('status')
        // table.integer('school_id').references('id').inTable('schools').onDelete('CASCADE')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('transactions')
};
