import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import Button from './components/button.jsx'

function App() {
  const [user, setUser] = useState({name:true, age: true, isbusy: true})

  
  return (
    <>
      <p>Name:{ user.name ? "oakkar" : "Shunn Lae Kay Khaing" }</p>
      <p>Age: {user.name ? 27 : 22 }</p>
      <p>Status: {user.isbusy ? 'Busy' : 'Available'}</p>
      <button onClick={() => setUser((previous) => ({age : !previous.age,name : !previous.name,  isbusy: !previous.isbusy}))}>Change Status</button>
    </>
  )
}

export default App
