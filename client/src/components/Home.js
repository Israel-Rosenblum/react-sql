import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../style/component.module.css";
export default function Home() {
  // const route = useParams();

  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);

  const Logout=()=>{
    localStorage.clear();
    navigate('/');
  }

  return (
    <div className={style.home} >
        <h1 className={style.welcome} >Welcome {userObject.name} !</h1>
        <h3 className={style.p}>Here you can see all the information you have on the server.</h3>
      <h3 className={style.p}>Information can be deleted and information can be uploaded.</h3>
      <div
        className={style.links}
        onClick={() => {
            navigate(`/todos/${userObject.id}`);
        }}
        >
        Todos
      </div>
      

      <div
        className={style.links}
        onClick={() => {
          navigate(`/posts/${userObject.id}`);
        }}
      >
        Posts
      </div>
      <div
        className={style.links}
        onClick={Logout} style={{backgroundColor:"red"}}> 
        Logout
      </div>
    </div>
  );
}