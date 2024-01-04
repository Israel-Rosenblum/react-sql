import style from './style/component.module.css';
import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Todos from './components/Todos';
import Posts from './components/Posts';
import Albums from './components/Albums';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="home/:id" element={<Home />} />
          <Route path="todos/:id" element={<Todos />} />
          <Route path="posts/:id" element={<Posts />} />
          <Route path="albums/:id" element={<Albums />} />
          <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}







export default App;
