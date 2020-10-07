import React, {useState } from 'react'
import apiConfig from '../apiConfig'

function Weather() {
  // Set today's date
  const dateSet = (today) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[today.getDay()]
    let date = today.getDate()
    let month = months[today.getMonth()]
    let year = today.getFullYear()

    return `${day} ${date} ${month}, ${year}`
  }

  // set the current time of the client's computer
  const timezoneHours = (new Date().getHours())
  const timezoneMinutes = (new Date().getMinutes())

  // set the query parameter for api call to open weather api
  const [query, setQuery] = useState('')
  // set the data from open weather api
  const [weather, setWeather] = useState({})

  // make the api call to open weather
  const search = e => {
    if (e.key === "Enter") {
      fetch(`${apiConfig.base}weather?q=${query}&units=imperial&APPID=${apiConfig.key}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
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
        <div className="full-report">
          <div className="location-box">
            <div className="location">
              {weather.name}, {weather.sys.country}
              </div>
            <div className="date">{dateSet(new Date())}</div>
          </div>
          <div className="time-box">
            <div className="time">
              Current Time: {timezoneHours}:{timezoneMinutes}
            </div>
          </div>
          <div className="temp-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°F
            </div>
          </div>
          <div className="weather-box">
            <div className="weather">
              {weather.weather[0].description}
            </div>
          </div>
          <div className="temp-range-box">
            <div className="temp-range">
              H: {Math.round(weather.main.temp_max)}°F  L: {Math.round(weather.main.temp_min)}°F
              <br />
              Feels Like: {Math.round(weather.main.feels_like)}°F
            </div>
          </div>
        </div>
        ) : (
          <div>
            <div className="location-box">
              <div className="location">
                Type your city in the search bar above
              </div>
            </div>
            <div className="time-box">
              <div className="time">
                Current Time: {timezoneHours}:{timezoneMinutes}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Weather
