const { Client } = require("pg");
const { getDatabaseUri } = require("./config");
require("colors");

console.log(getDatabaseUri().bgBlue)
// connect to database using the databse Uri
const db = new Client({ connectionString: getDatabaseUri() });

// check if we are able to connect
db.connect((err) => {
  // if  there is an error in connect
  if (err) {
    // we dispaly connection error
    console.error("connection error".red, err.stack);
  }
  // if there is no error
  else {
    // we display that we successfully connected
    console.log("successfully conected to postgres db!".blue);
  }
});

module.exports = db;
