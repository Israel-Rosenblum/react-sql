const pool = require('./main');
//sohow comments by  id
async function getComment(id) {
    const SQL = `SELECT *
     FROM comments WHERE id=? `
    const [data] = await pool.query(SQL, [id])
    return data;
}
//show comment by post id
async function getComments(postId) {
    const SQL = `SELECT *
     FROM comments WHERE postId=? `
    const [data] = await pool.query(SQL, [postId])
    return data;
}

//add comment
async function addComment(id,postId, name, body) {
    const SQL = `INSERT INTO comments (postId, name, body)
    VALUES (?,?,?)`;
    const [data] = await pool.query(SQL, [postId, name, body])
    return getComments(id)
}
//set comment 
async function setComment(id, body) {
    const SQL = ` UPDATE comments  
    SET body =?
    WHERE id =?`;
    const [data] = await pool.query(SQL, [body, id])
    return getComment(id)
}
//delete comment Provided he owns the post
async function deleteComment(id) {
    const [result] = await getComment(id);
    const SQL = `DELETE FROM comments WHERE id=?`;
    const [data] = await pool.query(SQL, [id])
    return result;
}
module.exports = {
    getComments,
    getComment,
    addComment,
    setComment,
    deleteComment
}




