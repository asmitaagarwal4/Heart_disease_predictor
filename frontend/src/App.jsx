import { useState } from 'react'
import './App.css'
import Signup from './Components/Signup'
import Signin from './Components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Signup /> */}
    <Signin />
    </>
  )
}

export default App
