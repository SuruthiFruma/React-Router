import React, { useEffect } from 'react'
import { Navigate,useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate=useNavigate()
  useEffect(()=>{
    setTimeout(()=>{
        navigate('/',{state:'Error not foumd'})
    },2000)
  },[])
  return (
    // <div>
    //   Page Not found
    //   <Navigate to='/'></Navigate>
    // </div>
    <>
    Page Not found... Redirecting you to home Page
    </>
  )
}

export default NotFound
