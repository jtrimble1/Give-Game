/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id');
    table.string('first_name');
    table.string('last_name');
    table.string('email').unique().notNullable(); // unique email is critical
    table.string('password'); // null if social login is used
    table.string('photo_url');
    table.boolean('uses_two_factor').defaultTo(false);
    table.string('auth_provider'); // NEW: 'google', 'facebook', 'apple', or 'local'
    table.string('authy_id');
    table.string('country_code');
    table.string('phone');
    table.integer('current_team_id');
    table.string('stripe_id'); // corrected from integer
    table.string('current_billing_plan');
    table.string('card_brand');
    table.string('card_last_four', 4); // corrected to string for consistent formatting
    table.timestamps(true, true); // optional: created_at and updated_at

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
