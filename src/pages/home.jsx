import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { currentUser } = useAuth()

  return (
    <div>
      <h1>Home Page</h1>
      <h3>Email: {currentUser.email}</h3>
    </div>
  )
}

export default Home
