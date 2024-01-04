import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from '../style/component.module.css';
import { useState, useEffect } from 'react';
import Todo from './todo';
import axios from 'axios';
export default function Todos() {

    const navigate = useNavigate();
    const [addTodo, setAddTodo] = useState(false);
    const [search, setSearch] = useState(false);
    const [todos, setTodos] = useState([]);

    let user = localStorage.getItem("user");
    let userObject = JSON.parse(user);

    const showData = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/todos/${userObject.id}`)
            setTodos(data);
        }
        catch (error) { }
    }

    useEffect(() => {
        showData()
    }, []);
    const displeyTodos = () => {
        return todos.map((item) => (
            <Todo showData={showData} item={item} key={item.id} deleteTodo={deleteTodo} todoCompleted={todoCompleted} upDateTitle={upDateTitle} />
        ))
    }
    const todoCompleted = async (id, isCompleted) => {
        try {
            const { data } = await axios.put(`http://localhost:8000/api/todos/${id}/setCompleted`,
                { completed: parseInt(isCompleted) ? 0 : 1 })
            console.log(data);
            const listTodos = todos.map(todo => todo.id === data[0].id ? { ...todo, completed: data[0].completed } : todo)
            setTodos(listTodos);
        } catch (error) {

        }
    };
    const upDateTitle = async (e, id) => {
        const editTask = e.target.upDateTodo.value;
        if (editTask.length === 0) return
        const listTodos = todos.map(todo => todo.id === id ? { ...todo, title: editTask } : todo)
        setTodos(listTodos);
        try {
            const response = await axios.put(`http://localhost:8000/api/todos/${id}/setTodo`,
                { title: editTask })
        } catch (err) {

        }
    }
    const deleteTodo = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/todos/${id}`)
            const newArr = todos.filter(todo => todo.id !== id);
            setTodos(newArr);
        }
        catch (err) {
        }
    }
    const alphabet = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/todos/${userObject.id}/alphabet`)
            setTodos(data);
        }
        catch (error) { }

    }
    const isNotCompleted = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/todos/${userObject.id}/false`)
            setTodos(data);
        }
        catch (error) { }

    }
    const isCompleted = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/api/todos/${userObject.id}/true`)
            setTodos(data);
        }
        catch (error) {
        }
    }
    const handleSelect = (event) => {
        if (event.target.value === "a-z") {
            alphabet();
        }
        else if (event.target.value === "Serial") {
            showData()
        }
        if (event.target.value === "Completed") {
            isCompleted()
        }
        else if (event.target.value === "notCompleted") {
            isNotCompleted()
        }
    }

    const creatNewTodo = async (e) => {
        const newTitleTodo = e.target.add.value;
        if (newTitleTodo.length === 0) return;
        const { data } = await axios.post(`http://localhost:8000/api/todos/${userObject.id}`,
            { userId: userObject.id, title: newTitleTodo, completed: 0 });
        setTodos([...todos, data[0]]);
    };
    const toSearch = async (e) => {
        let searchTitle = e.target.value;
        try {
            const { data } = await axios.get(`http://localhost:8000/api/todos/${userObject.id}/${searchTitle}`,);
            setTodos(data);
            console.log(data);
        }
        catch (error) {
        }

    }
    return (
        <div>
            <div className={style.links} onClick={() => { navigate(`/home/${userObject.id}`) }}>Home</div>
            <h1>tasks of {userObject.name} !</h1>
            <div className={style.todosContainer}>
                <div className={style.header}>
                    {/* <span className={style.selectBy}>  Order by:</span> */}

                    <select className={style.select} onChange={handleSelect}>
                        <option >Order by</option>
                        <option value="a-z">A-Z</option>
                        <option value="Serial">Serial</option>
                        <option value="Completed">Completed</option>
                        <option value="notCompleted">not Completed</option>
                    </select>
                    <div className={style.addTodoButton} onClick={() => { setAddTodo(!addTodo) }}>Add Todo</div>
                    <div className={style.addTodoButton} onClick={() => setSearch(!search)}>Search</div></div>
                <br />
                <form style={addTodo ? { display: "block" } : { display: "none" }} onSubmit={(e) => {
                    e.preventDefault();
                    creatNewTodo(e)
                    setAddTodo(!addTodo)
                }}>
                    <input className={style.addTodo} name='add' placeholder='Add a task' />
                    <button className={style.sendNewTodo}>Send</button>
                </form>
                <input className={style.search} name='search' placeholder='search' style={search ? { display: "block" } : { display: "none" }} onChange={(e) => toSearch(e)} />
                {displeyTodos()}
            </div>

            <form>

            </form>
        </div>
    )
}
