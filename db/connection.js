const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connessione al DB riuscita');
});

module.exports = connection;
