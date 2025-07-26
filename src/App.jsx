import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import Button from './components/button.jsx'

function App() {
  const [user, setUser] = useState({name:true, age: true, isbusy: true})
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [btn,setBtn] = useState("");

  useEffect( () =>{
    if(!name){
      setError("Please enter your name")
      setBtn('')
    }else{
      setError("")
      setBtn(<button>Click</button>)
    }
  },[name]
)
  
  return (
    <>
      <p>Name:{ user.name ? "oakkar" : "Shunn Lae Kay Khaing" }</p>
      <p>Age: {user.name ? 27 : 22 }</p>
      <p>Status: {user.isbusy ? 'Busy' : 'Available'}</p>
      <button onClick={() => setUser((previous) => ({age : !previous.age,name : !previous.name,  isbusy: !previous.isbusy}))}>Change Status</button>
      <form>
        <p>Enter your name:{name}</p>
        
        
        <input type="text" value={name} onChange={(e)=> setName(e.target.value.trim())} />
        {btn}
        <p>{error}</p>
      </form>
    </>
  )
}

export default App
