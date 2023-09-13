const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./test.db");

// Runs the SQL query with the specified parameters and calls the callback
// with all result rows afterwards.
console.log("-- db.all()");
db.all(`SELECT * FROM users`, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row);
  });
  console.log("-- db.all() end");
});

// First row only
console.log("-- db.get()");
db.get(`SELECT * FROM users`, [], (err, row) => {
  if (err) {
    throw err;
  }
  if (row) {
    console.log(row);
    console.log("-- db.get() end");
  } else {
    console.log("No results");
  }
});

// Calls the callback once for each result row
// After all row callbacks were called, the completion callback
// will be called if present.
console.log("-- db.each()");
db.each(
  `SELECT * FROM users`,
  [],
  (err, row) => {
    if (err) {
      throw err;
    }
    console.log(row);
  },
  () => {
    console.log("-- db.each() end");
  }
);

// close the database connection
db.close();
