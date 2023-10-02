import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")
  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>

      <div className="fixed flex flex-wrap justify-center top-20 inset-x-0 ">
        <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-slate-300  rounded-xl" > 
          <button className='button 1 shadow-xl p-8 m-10 bg-emerald-400 rounded-md' onClick={()=>{setColor("#34D399")}}>1</button>    
          <button className='button 2 shadow-xl p-8 m-10 bg-orange-200 rounded-md' onClick={()=>{setColor("#FED7AA")}}>2</button>
          <button className='button 3 shadow-xl p-8 m-10 bg-cyan-600 rounded-md' onClick={()=>{setColor("#00acc1")}}>3</button>
          <button className='button 4 shadow-xl p-8 m-10 bg-violet-400 rounded-md' onClick={()=>{setColor("#7C3A98")}}>4</button>
          <button className='button 5 shadow-xl p-8 m-10 bg-sky-600 rounded-md' onClick={()=>{setColor("#0EA5E9")}}>5</button>
          <button className='button 6 shadow-xl p-8 m-10 bg-red-400 rounded-md' onClick={()=>{setColor("#F87171")}}>6</button>
        </div>
      </div>
    </div>
  )
}

export default App
