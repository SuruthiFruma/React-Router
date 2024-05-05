import React from 'react'
import { useParams } from 'react-router-dom'

function DynamicBook() {
    const {id}=useParams()
  return (
    <div>
    {`  This is Dynamic Book Routed for ${id}`}
    </div>
  )
}

export default DynamicBook
