/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('fundraiser', table => {
      table.increments('id')
      table.string('fund_name')
      table.string('picture')
      table.string('location')
      table.string('type')
      table.string('story')
      table.string('catchphrase')
      table.decimal('funding_need')
      table.decimal('funding_current')
  
    })
  };
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('fundraiser')
};
