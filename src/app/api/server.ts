const db = require('pg-promise')();

const dbConfig = {
  connectionString: process.env.DATABASE_URL,
};

const dbInstance = db(dbConfig);