import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhotoDisplay = () => {
    const [photo, setPhoto] = useState([]);

    const fetchPhoto = () => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14")
        .then(response => {
          setPhoto(response.data);
        })
        .catch(err => {
          console.log(err);
        });
      };
  
    useEffect(() => {
      fetchPhoto();
    }, []);

    return (
        <div className="App">
            <h1>Photos of the Day!</h1>
            <h2>{photo.title}</h2>
            <img src={photo.url} alt="nasa pic" />
            <p>{photo.explanation}</p>
        </div>
    )
}

export default PhotoDisplay