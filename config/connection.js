// Set up MySQL connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "demetriov635",
    database: "burgers_db"
});

// Make connection.
connection.connect((err) => {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Exports connection for ORM to use.
module.exports = connection;