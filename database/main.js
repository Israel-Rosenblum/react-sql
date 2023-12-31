const mysql = require('mysql2/promise');
require('dotenv').config();
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'user_management',
    password: process.env.SQL_password || "3505",
});

module.exports = pool;