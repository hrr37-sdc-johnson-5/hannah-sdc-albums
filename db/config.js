const { Pool } = require('pg');

const pool = new Pool({
  user: 'power_user',
  password: '$poweruserpassword',
  host: 'ec2-54-67-105-100.us-west-1.compute.amazonaws.com',
  port: 5432,
  database: 'postgres',
});

pool.connect()
  .then(() => console.log('successfully connected'))
  .catch(err => console.log(err, 'error connecting'));

module.exports = { pool };
