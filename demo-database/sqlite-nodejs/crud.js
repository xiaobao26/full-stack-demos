// Create, read, update, delete

const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./test.db");

db.serialize(() => {
  // 1. Drop table student is exist
  console.log("1. Drop table student");
  db.run(`DROP TABLE IF EXISTS student;`, (err) => {
    if (err) {
      console.error(err);
    }
  });

  // 2. Create a table named student
  console.log("2. Create a table named student");
  db.run(`CREATE TABLE student (id INTEGER PRIMARY KEY, name TEXT);`, (err) => {
    if (err) {
      console.error(err);
    }
  });

  // 3. Insert a data into the table student
  console.log("3. Insert a data into the table student");
  db.run(
    `INSERT INTO student (name) VALUES ("Long Cheng"), ("Chaoyue Yang"), ("Ying Zhan");`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  // 4. Query a student named Ying Zhan
  console.log("4. Query a student named Ying Zhan");
  db.get(`SELECT name FROM student WHERE name = "Ying Zhan";`, (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log(res);
  });

  // 5. Update Ying Zhan student to Zhen Ding student
  console.log("5. Update Ying Zhan student to Zhen Ding student");
  db.run(
    `UPDATE student SET name = "Zhen Ding" WHERE name = "Ying Zhan";`,
    (err) => {
      if (err) {
        console.error(err);
      }
    }
  );

  // 6. Query a student named Ying Zhan
  console.log("6. Query a student named Ying Zhan");
  db.get(`SELECT name FROM student WHERE name = "Ying Zhan";`, (err, res) => {
    if (err) {
      console.error(err);
    }

    if (res) {
      console.log(res);
    } else {
      console.log("There is not a student namend Ying Zhan");
    }
  });

  // 7. Query a student named Zhen Ding
  console.log("7. Query a student named Zhen Ding");
  db.get(`SELECT name FROM student WHERE name = "Zhen Ding";`, (err, res) => {
    if (err) {
      console.error(err);
    }
    console.log(res);
  });

  // 8. Delete the existed student Zhen Ding
  console.log("8. Delete the existed student Zhen Ding");
  db.run(`DELETE FROM student WHERE name = "Zhen Ding";`, (err) => {
    if (err) {
      console.error(err);
    }
  });

  // 9. Delete the non-exist student Meinv
  console.log("9. Delete the non-exist student Meinv");
  db.run(`DELETE FROM student WHERE name = "Meinv";`, (err) => {
    if (err) {
      console.error(err);
    }
  });
});

// close the database connection
db.close();
