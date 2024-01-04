import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "../style/component.module.css";
import { useState, useEffect } from "react";

export default function Post(props) {

  let user = localStorage.getItem("user");
  let userObject = JSON.parse(user);
  const [displayBody, setDisplayBody] = useState(false);
  const [input, setInput] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <div className={style.postContainer}>
        <div className={style.post}>
          <h3
            onClick={() => {
              setDisplayBody(!displayBody);
            }}
          >
            [{props.post.id}] {props.post.title}{" "}
          </h3>
          <form style={input ? { display: "block" } : { display: "none" }} onSubmit={(e) => {
            e.preventDefault();
            props.updatePost(e, props.post.id)
            setInput(!input)
          }}>
            <input type="text" name="update" className={style.inputBodyPost}
              onChange={(e) => setText(e.target.value)}
              style={input ? { display: "block" } : { display: "none" }} />
            <button style={input ? { display: "block" } : { display: "none" }}
              onClick={() => { props.updatePost(text, props.post.id) }}>שלח</button>
          </form>
          <div className={style.buttonContainer} style={props.post.userId == userObject.id ?
            { display: "block" }
            : { display: "none" }
          }>
            <div className={style.btn}>
              <button onClick={() => { props.deletePost(props.post.id) }} className={style.deletePost}>delete </button>
              <button className={style.deletePost} onClick={() => setInput(!input)}> updata </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={style.displayBody}
        style={displayBody ? { display: "block" } : { display: "none" }}
      >
        {props.post.body}
      </div>
    </>
  );
}