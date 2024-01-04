const express = require('express');
const app = express();
app.use(express.json());
const cors=require('cors');
const login = require('./server/login_server')
const todos = require('./server/todos_server');
const posts = require('./server/posts')
app.use(cors());
app.use('/api/login', login);
app.use('/api/todos', todos);
app.use('/api/posts', posts);







const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`port ${8000}`));