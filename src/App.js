import React from 'react';
import './App.css';
import api from './apiConfig'
import Search from './Search/Search.js'
import Location from './Location/Location.js'
import Temp from './Temp/Temp.js'
import Weather from './Weather/Weather.js'

function App() {
  return (
    <div className="app">
      <main>
        <Search />
        <Location />
        <Temp />
        <Weather />
      </main>
    </div>
  );
}

export default App;
