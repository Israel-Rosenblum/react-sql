import React from 'react'
import style from '../style/component.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onSubmitHadler = async () => {
        try {
            const { data } = await axios.post(
                `http://localhost:8000/api/login/`,
                { name: name, password: password }
            )
            localStorage.setItem("user", JSON.stringify(data));
            navigate(`/home/${data.id}`);
        }
        catch (error) {
            setError(error.response.data);
        }
    }
    return (
        <div className={style.login}>
            <h1 style={{ color: "white" }}> Login </h1>
            <form>
                <input className={style.inputPassword} id='name' value={name} type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <br />
                <input className={style.inputName} id='password' value={password} type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} /><br /><br />
                <div className={style.submit} onClick={() => { onSubmitHadler() }}>Go</div>
                <div ><h1>{error}</h1></div>
            </form>
        </div>
    )
}