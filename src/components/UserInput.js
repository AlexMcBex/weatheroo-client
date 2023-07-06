// DEPENDENCIES
import React, { useState } from 'react'

//  COMPONENT => User input
const UserInput = ({ onSubmit }) => {
    // City submitted
  const [city, setCity] = useState('')

    // store user input in state 
  const handleInputChange = (event) => {
    setCity(event.target.value)
  }

    // prevent refresh
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(city)
  }

  

  return (
    <form onSubmit={handleSubmit} className='user-input'>
      <input type="text" value={city} onChange={handleInputChange} placeholder="Enter city name..." />
      <button type="submit">Search</button>
    </form>
  )

}

export default UserInput