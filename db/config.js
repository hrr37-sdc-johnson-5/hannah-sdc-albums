const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  database: 'bandland',
});

pool.connect()
  .then(() => console.log('successfully connected'))
  .catch(err => console.log(err, 'error connecting'));

module.exports = { pool };
