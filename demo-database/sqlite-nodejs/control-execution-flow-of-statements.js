const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./test.db");

// Serialize
db.serialize(function () {
  // These three queries will run sequentially.
  db.run("DROP TABLE IF EXISTS foo");
  console.log("-- end drop table foo");
  db.run("CREATE TABLE foo (num)");
  console.log("-- end create table foo");
  db.run("INSERT INTO foo VALUES (?)", 1, function () {
    // These queries will run in parallel and the second query will probably
    // fail because the table might not exist yet.
    db.run("CREATE TABLE bar (num)");
    db.run("INSERT INTO bar VALUES (?)", 1, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  });
});

// About parallelize - see https://github.com/TryGhost/node-sqlite3/wiki/Control-Flow#databaseparallelizecallback


// close the database connection
db.close();
