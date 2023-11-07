import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput/TodoInput'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoInput/>
    </>
  )
}

export default App
