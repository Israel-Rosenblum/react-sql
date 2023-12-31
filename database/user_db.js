const pool = require('./main');

//get user by user name
async function getUserName(name) {
    const SQL = `SELECT *
     FROM users WHERE name=? `
    const [[data]] = await pool.query(SQL, [name])
    return data;
}
//get user by password
async function getUserPassword(password) {
    const SQL = `SELECT *
     FROM passwords WHERE password=? `
    const [[data]] = await pool.query(SQL, [password])
    return data;
}
//login user with password and name
async function login(username, password){
    const SQL = `SELECT *
    FROM users 
    JOIN passwords ON users.id = passwords.userId
    WHERE users.name = ? AND passwords.password = ?`;
    const [[data]] = await pool.query(SQL, [username,password])
    return data;
}

