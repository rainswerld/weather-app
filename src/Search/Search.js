// import React, { useState } from 'react'
// import apiConfig from '../apiConfig'
//
// function Search() {
//   const [query, setQuery] = useState('')
//
//   const search = e => {
//     if (e.key === "Enter") {
//       fetch(`${apiConfig.base}weather=${query}&units=imperial&APPID=${apiConfig.key}`)
//         .then(res => res.json())
//     }
//   }
//
//   return (
//     <div className="search-bar">
//       <input
//         type="text"
//         className="search-input"
//         placeholder="WHERE YOU AT?"
//         onChange={event => setQuery(event.target.value)}
//         value={query}
//       />
//     </div>
//   )
// }
//
// export default Search
