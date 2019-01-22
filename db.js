const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'test',
  // user: 'test',
  // password: 'password',
  // port: 5432,
});


module.exports = pool;