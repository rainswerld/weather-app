import React, {useState } from 'react'
import apiConfig from '../apiConfig'

function Weather() {
  const dateSet = (today) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[today.getDay()]
    let date = today.getDate()
    let month = months[today.getMonth()]
    let year = today.getFullYear()

    return `${day} ${date} ${month}, ${year}`
  }

  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState({})

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${apiConfig.base}weather?q=${query}&units=imperial&APPID=${apiConfig.key}`)
        .then(res => res.json())
        .then(data => {
          setWeather(data)
          setQuery('')
        })
        .catch(err => console.error(err))
    }
  }

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="WHERE YOU AT?"
          onChange={event => setQuery(event.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
              </div>
            <div className="date">{dateSet(new Date())}</div>
          </div>
          <div className="temp-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°F
            </div>
          </div>
          <div className="weather-box">
            <div className="weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
    </div>
  )
}

export default Weather
