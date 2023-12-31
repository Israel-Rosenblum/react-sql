const pool = require('./main');

//get all todos by user id
async function getAllTodos(id) {
    const SQL = `SELECT title
     FROM todos WHERE userId=? `
    const [data] = await pool.query(SQL, [id])
    return data;
}
//get todo
async function getTodo(id) {
    const SQL = `SELECT *
     FROM todos WHERE id=? `
    const [[data]] = await pool.query(SQL, [id])
    return data;
}
//create a new todo
async function createTodo(userId, title, completed) {
    const SQL = `INSERT INTO user_management.todos (
    userId, title,completed)
    VALUES (?,?,?)`;
    const [data] = await pool.query(SQL, [userId, title, completed])
    return getTodo(data.insertId);
}
//delete title
async function deleteTodo(id) {
    const result = await getTodo(id);
    const SQL = `DELETE FROM todos WHERE id=?`;
    const [data] = await pool.query(SQL, [id])
    return result;
}
//set title 
async function setTitleTodo(title,id) {
    const SQL = `UPDATE todos SET title =? WHERE id =?`;
    const [data] = await pool.query(SQL, [title, id])
    return getTodo(id);
}
//set completed todo
async function setComleetedTodo(id, completed) {
    const SQL = `UPDATE todos SET completed =? WHERE id =?`;
    const [data] = await pool.query(SQL, [completed, id])
    return getTodo(id);
}
//show completed if done
async function showCompleteDone(id) {
    const SQL = `SELECT *
    FROM todos WHERE completed=1 AND userId=?`
    const [data] = await pool.query(SQL,[id])
    return data;
}
//show completed not done
async function showCompleteNotDone(id) {
    const SQL = `SELECT * FROM todos
    WHERE completed=0 AND userId=?`
    const [data] = await pool.query(SQL,[id])
    return data;
}

module.exports = {
    getAllTodos,
    getTodo,
    createTodo,
    deleteTodo,
    setTitleTodo,
    setComleetedTodo,
    showCompleteDone,
    showCompleteNotDone,
}
