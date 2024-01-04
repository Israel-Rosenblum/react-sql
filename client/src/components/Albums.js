import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from '../style/component.module.css';
import { useState, useEffect } from 'react';
import Album from './album';

export default function Albums() {
  const userId = useParams();
  const [albums, setAlbums] = useState([]);

  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await fetch(`http://localhost:3500/albums?userId=${userId.id}`)
    const arrJson = await response.json();
    setAlbums(arrJson);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const displayAlbums = () => {
    return <div className={style.albumsContainer}>
      <h1>albums</h1>
      {albums.map(album => {
        return <Album album={album} />
      }
      )}
    </div>
  }

  return (
    <div>
      <div className={style.links} onClick={() => { navigate(`/home/${userId.id}`) }}>Home</div>
      {displayAlbums()}
    </div>
  )
}
