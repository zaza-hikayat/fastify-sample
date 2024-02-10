// Update with your config settings.
require(`dotenv`).config();
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME
} = process.env
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      port: DB_PORT,
      host: DB_HOST,
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      port: DB_PORT,
      host: DB_HOST,
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
