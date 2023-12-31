const pool = require('./main');

//get all titles of posts
async function getAllTitlesOfposts() {
    const SQL = `SELECT title FROM posts`;
    const [data] = await pool.query(SQL);
    console.log(data);
    return data;
};
//get body of post by post id
async function getBodyOfPost(id) {
    const SQL = `SELECT body FROM posts WHERE id = ?`;
    const [[data]] = await pool.query(SQL, [id]);
    return data;
};

//get post by id
async function getPost(id) {
    const SQL = `SELECT * FROM posts WHERE id = ?`;
    const [[data]] = await pool.query(SQL, [id]);
    return data;
};

//create a new post by user id
async function createPost(userId, title, body) {
    const SQL = `INSERT INTO posts
    (userId, title, body)
    VALUES(?, ?, ?)`;
    const [data] = await pool.query(SQL, [userId, title, body]);
    return getPost(data.insertId)
};

// delete post by post id
async function deletePost(id) {
    const SQL = `DELETE FROM posts
    WHERE id = ?`;
    const result = await getPost(id)
    const [data] = await pool.query(SQL, [id]);
    console.log(result);
    return result
};
// update body post
async function updateBodyPost(id, body) {
    const SQL = `UPDATE posts
    SET body = ?
    WHERE id = ?`;
    const [data] = await pool.query(SQL, [body, id]);
    return getPost(id);
};
//get only five titles of posts
async function getFIVETitlesOfposts() {
    const SQL = `SELECT title FROM posts ORDER BY title LIMIT 5`;
    const [data] = await pool.query(SQL);
    return data;
};
module.exports = {
    getAllTitlesOfposts,
    getFIVETitlesOfposts,
    getBodyOfPost,
    getPost,
    createPost,
    deletePost,
    updateBodyPost,
}