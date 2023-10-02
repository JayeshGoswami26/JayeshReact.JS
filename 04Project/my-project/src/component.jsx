import { useState } from 'react'

function Buttons({urlLink, }) {
    const [count, setCount] = useState(0)
    
    return (
      <>
        <div className="backBox" >
          <div className='p-10 box1'> 
            <button className='button 1 shadow-md p-8 m-10 bg-emerald-400 rounded-md' >1</button>
  
            <button className='button 2 shadow-md p-8 m-10 bg-orange-200 rounded-md'>2</button>
  
            <button className='button 3 shadow-md p-8 m-10 bg-cyan-600 rounded-md'>3</button>
  
            <button className='button 4 shadow-md p-8 m-10 bg-violet-400 rounded-md'>4</button>
  
            <button className='button 5 shadow-md p-8 m-10 bg-sky-600 rounded-md'>5</button>
  
            <button className='button 6 shadow-md p-8 m-10 bg-red-400 rounded-md'>6</button>
  
          </div>
        </div>
      </>
    )
  }

export default Buttons