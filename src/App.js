import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const [images, setImages] = useState([]);
  const [text, setText] = useState('');
  const [query, setQuery] = useState('apple');
  useEffect(() => {
    console.log('useEffect passed.')
    fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_CLIENT_ID}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setImages(data.results)
        })
  }, [query])
  return  (
    <div>

    </div>
  )
}