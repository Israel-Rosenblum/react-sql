import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import style from '../style/component.module.css';
import { useState, useEffect } from 'react';

export default function Album(props) {

    const userId = useParams();
    const [photos, setPhotos] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3500/photos?albumId=${props.album.id}`)
        const arrJson = await response.json();
        setPhotos(arrJson);
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const displayPhotos = () => {
        if (photos && photos.length > 0) {
          const photosToDisplay = [];
          for (let i = currentIndex; i < (currentIndex+4); i++) {
            if (photos[i] && photos[i].thumbnailUrl) {
              photosToDisplay.push(<img src={photos[i].thumbnailUrl}  onClick={()=>{setCurrentIndex(currentIndex+1)}}/>);
            }
          }
          return photosToDisplay;
        } else {
          return <p>No photos available</p>;
        }
      };

    const [displayBody, setDisplayBody] = useState(false);
    return (
        <>
            <div className={style.albumContainer}>
                <div className={style.album}>
                    <h3 onClick={() => { setDisplayBody(!displayBody); fetchData() }}>[{props.album.id}] {props.album.title} </h3>
                </div>
            </div>
            <div className={style.displayBody} style={displayBody ? { display: "block" } : { display: "none" }}>
                {
                    displayBody ? displayPhotos() : null

                }
            </div>
        </>
    )
}
