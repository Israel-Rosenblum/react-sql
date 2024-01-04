import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './post';
import axios from 'axios';
import style from '../style/component.module.css';

export default function Posts() {
    let user = localStorage.getItem("user");
    let userObject = JSON.parse(user);
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();
    //get all posts everyone's
    const getAllPosts = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/posts/`)
            setPosts(data);
        }
        catch (error) { }
    };

    useEffect(() => {
        getAllPosts()
    }, []);

    const displayPosts = () => {

        return <div className={style.postsContainer}>
            <h1>Welcome  {userObject.name} !</h1>
            {posts.map((post, key) => {
                return <Post post={post} key={post.id}
                    deletePost={deletePost} updatePost={updatePost} />
            })}
        </div>
    }
    //delete post by
    const deletePost = async (id) => {
        console.log("jjjj0");
        try {
            const response = await axios.delete(`http://localhost:8000/api/posts/${id}`,
            {headers:{auth: `${userObject.name}:${userObject.password}`}})
            const newArr = posts.filter(todo => todo.id !== id);
            setPosts(newArr);
        }
        catch (err) {
        }
    };
    
    const updatePost = async (text, id) => {
        if (text.length === 0) return
        try {
            const response = await axios.put(`http://localhost:8000/api/posts/${id}/`,
            { body: text}, {headers:{
                auth: `${userObject.name}:${userObject.password}`
            } })
            const listPost = posts.map(post => post.id === id ? { ...post, body: text } : post)
            setPosts(listPost);
        } catch (err) {

        }
    }



    return (
        <div>
            <div className={style.links} onClick={() => { navigate(`/home/${userObject.id}`) }}>Home</div>
            {displayPosts()}
        </div>
    )
}