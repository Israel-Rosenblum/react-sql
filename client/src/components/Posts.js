import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Post from './post';
import axios from 'axios';
import style from '../style/component.module.css';

export default function Posts() {
    const user = localStorage.getItem("user");
    const userObject = JSON.parse(user);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
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


    //delete post by
    const deletePost = async (postId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/posts/${postId}`,
                { headers: { auth: `${userObject.name}:${userObject.password}` } })
            const newArr = posts.filter(post => post.id !== postId);
            setPosts(newArr);
        }
        catch (err) {
        }
    };

    const updatePost = async (text, id) => {
        if (text.length === 0) return
        try {
            const response = await axios.put(`http://localhost:8000/api/posts/${id}/`,
                { body: text }, {
                    headers: {
                        auth: `${userObject.name}:${userObject.password}`
                    }
            })
            const listPost = posts.map(post => post.id === id ? { ...post, body: text } : post)
            setPosts(listPost);
        } catch (err) {

        }
    };

    const showComments = async (postId) => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/posts/${postId}/comments`)
           if(data){setComments(data)};
        } catch (error) { }
    };

    const displayPosts = () => {

        return <div className={style.postsContainer}>
            <h1>Welcome  {userObject.name} !</h1>
            {posts.map((post, key) => {
                return <Post post={post} key={post.id}
                    deletePost={deletePost} updatePost={updatePost} showComments={showComments} comments={comments}/>
            })}
        </div>
    }

    return (
        <div>
            <div className={style.links} onClick={() => { navigate(`/home/${userObject.id}`) }}>Home</div>
            {displayPosts()}
        </div>
    )
}