const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/brand_db';

const exec = pg.connect(connectionString, (err, client, done) => {
  // Handle connection errors
  if(err) {
    done();
    console.log(err);
    return res.status(500).json({success: false, data: err});
  }
  // SQL Query > Insert Data
  client.query('INSERT INTO items(text, complete) values($1, $2)',
    [data.text, data.complete]);
  // SQL Query > Select Data
  const query = client.query('SELECT * FROM items ORDER BY id ASC');
  // Stream results back one row at a time
  query.on('row', (row) => {
    results.push(row);
  });
  // After all data is returned, close connection and return results
  query.on('end', () => {
    done();
    return res.json(results);
  });
});