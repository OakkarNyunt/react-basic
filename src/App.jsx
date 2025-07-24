// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home.jsx'
import Button from './components/button.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const user = { name: 'Junior React Developer', age: 23 }
  const products = [ "Laptop", "Mobile", "Tablet" ]
  const onClickHandler = () =>{
    alert("Button clicked!");
  }
  return (
    <>
     <Home {...user}/>
     <Button btn= "submit" onPress = {onClickHandler}/>
     {products.map((product)=>(
      <p key={products.index}>{product}</p>
     ))}
    </>
  )
}

export default App
