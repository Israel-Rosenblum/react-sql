import React from 'react'
import style from '../style/component.module.css';
import { useState } from 'react';
export default function Todo(props) {
    const [isUpData, setIsUpData] = useState(false);
    const myStyle = {
        display: isUpData ? "none" : null,
        color: !parseInt (props.item.completed) ? '#AEC09A' : null
    }
    return (
        <>
            <div className={style.todoContainer}>
                <div className={style.buttonsTodo} onClick={() => { setIsUpData(true) }}>Update</div>
                <div className={style.displeyTodo}>
                    <h3 style={!props.item.completed ? { color: '#AEC09A' } : null}>[{props.item.id}]</h3>
                    <form className={style.formUpdate} style={isUpData ? { display: "block" } : null}
                     onSubmit={(e)=>{props.upDateTitle(e, props.item.id);setIsUpData(false)}}>
                        <input type='text' name='upDateTodo' className={style.upDateTodo}  ></input>
                        <input type="submit" />
                    </form>
                    <h3 style={myStyle} >{props.item.title}</h3>
                    <input className='checkbox' type='checkbox' checked={parseInt(props.item.completed)} onChange={() => {props.todoCompleted(props.item.id, props.item.completed);}}></input>
                </div>
                <div className={style.buttonsTodo} onClick={() => { props.deleteTodo(props.item.id) }}>Delete</div>
            </div>
        </>
    )
}