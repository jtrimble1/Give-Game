// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const seeding = 'postgres://postgres:docker@127.0.0.1:5432/givengame'
const building = 'postgres://postgres:docker@givengame:5432/givengame'

require('dotenv').config();


module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: seeding
  //   }

    development: {
      client: 'pg',
      connection: building
      }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'GiveNGame',
  //     user:     'pg-docker',
  //     password: 'docker'
  //   }},
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
