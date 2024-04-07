import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [password , setPassword] = useState("")

  const passwordGenerator = useCallback( ()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!@#%^&*~`;:',."

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)


  } , [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClip = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }
  
  useEffect(()=>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  // USE REF 
  const passwordRef = useRef(null)

  return (
    <>
      <div className='max-w-md mx-auto p-5 container  flex content-center items-center h-screen'>
        <div className='box-bg shadow-2xl container shadow-gray-700 p-5 rounded-xl text-center divHOVER'>
          <h1 className='text-4xl text-center p-5'> PASSWORD GENERATOR </h1>
          <br />
          
          <input type="text" value={password} className='outline-none py-1 px-14 text-center bg-slate-200 rounded-lg rounded-r-none inline' placeholder='Password' readOnly ref={passwordRef} /> 
          
          <button className='inline decoration-non copy p-1 rounded-r-lg hover:bg-purple-700 transition-all hover:text-white ' onClick={copyPasswordToClip}>COPY</button>
          
          <div className='flex text-sm gap-x-2 mt-5'>
              <div className="flex item-center gap-x-1">
                <input type="range" min={6} max={15} value={length} className='cursor-pointer input text-sm ' 
                onChange={(e)=>{setLength(e.target.value)}} />
                <label > Length: {length} </label>
              </div>
              <div className="flex item-center gap-x-1">

                <input type="checkbox" className=' chekbox ' defaultChecked = {numberAllowed} id='numberInput' onChange={()=>{setNumberAllowed((prev)=>!prev);}} />
                <label htmlFor=""> Numbers </label>

                <input type="checkbox" className=' chekbox ' defaultChecked = {charAllowed} id='charInput' onChange={()=>{setCharAllowed((prev)=>!prev);}} />
                <label htmlFor=""> Characters </label>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
