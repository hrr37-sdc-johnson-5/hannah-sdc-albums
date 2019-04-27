const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'bandland',
});

module.exports = { pool };
