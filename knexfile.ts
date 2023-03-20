import dotenv from 'dotenv';
import type { Knex } from "knex";


// Update with your config settings.
dotenv.config();
const config: { [key: string]: Knex.Config } = {


  development: {
    debug:true,
    client: "postgresql",
    connection: {
      database: process.env.database,
      user: process.env.user,
      password: process.env.password
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
