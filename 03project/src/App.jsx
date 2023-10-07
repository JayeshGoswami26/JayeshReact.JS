import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" bg-white bg-box h-96 opacity-80 mt-40">
        <div className="">test</div>
      </div>
    </>
  )
}

export default App
