const { Pool } = require('pg');

export const pool = new Pool({
    host: process.env.AUTH_DATABASE_HOST,
    port: parseInt(process.env.AUTH_DATABASE_PORT || "5432", 10), // Default to 5432 if undefined
    database: process.env.AUTH_DATABASE_NAME,
    user: process.env.AUTH_DATABASE_USER,
    password: process.env.AUTH_DATABASE_PASSWORD,
}); 