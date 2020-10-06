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
      <Search />
      <Location />
      <Temp />
      <Weather />
    </div>
  );
}

export default App;
