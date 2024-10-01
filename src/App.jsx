import { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (
    <>
      <div className="card">
        {isAuthenticated && <h1>{user.name}</h1>}
        {isAuthenticated ? (<button onClick={() => logout()}> logout </button>) : (<button onClick={() => loginWithRedirect()}> login to continue </button>)}



      </div>

    </>
  )
}

export default App
