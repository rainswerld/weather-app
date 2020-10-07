import React, { useEffect, useState } from 'react'
import Unsplash, { toJson } from 'unsplash-js'
import fetch from 'node-fetch'
import './App.css'
import api from './apiConfig'
import Weather from './Weather/Weather.js'

global.fetch = fetch

const unsplash = new Unsplash({ accessKey: 'vRrjM47nn30k5-Et_4_ntkapy8oxBLWpbGGkiS7EzNw' })

function App() {

  const [image, setImage] = useState([])
  const [name, setName] = useState('')

  useEffect(() => {
    unsplash.photos.getRandomPhoto({ query: 'nature' })
      .then(toJson)
      .then(res => {
        setImage(res.urls.regular)
        setName(res.user.name)
      })
  }, [])

  return (
    <div className="app" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'bottom', transition: 'ease-in' }}>
      <main>
        <Weather />
        <div className="photo-cred">
          <p>Photo by {name}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
