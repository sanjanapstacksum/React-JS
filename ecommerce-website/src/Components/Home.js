import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'

function Home() {
  let getItem = localStorage.getItem("user-email");
  const navigate = useNavigate()
  useEffect(() => {
    if(!getItem)
    {
     navigate('/login')
     }
  }, [getItem])
  return (
    <Nav/>
  )
}

export default Home