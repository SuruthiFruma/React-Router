import React from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
    const location=useLocation()
    console.log(location)
  return (
    <div>
      This is Home Component
      {location?.pathname}
      {location?.host}
      {location?.search}
      {location?.state}
    </div>
  )
}

export default Home
