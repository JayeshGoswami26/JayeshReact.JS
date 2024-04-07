import React from 'react'
import {Link , NavLink} from 'react-router-dom'

function Login() {
  return (
    <>  
        <div className="h-screen w-screen absolute bg-slate-950 -z-50"></div>
          <div id="log-in" className=''>
            <div class="part-1">
                <h1 class="heading-p1 text-4xl"> PORSCHE </h1>
                <p class="text-p1"> Welcome Back </p>
            </div>
            <div class="part-2">
                <h2 class="headingp2"> Login </h2>
                <p class="text-p2"> 
                    Don't have an account? <br/> <NavLink to='/Signin' id="text-p2-link">Creat Your Account </NavLink> it takes less than a minute 
                </p>
                <div class="inputs-p2">
                    <input type="text" placeholder="user name" class="inputs-p2-enter"/>
                    <br/>
                    <input type="password" placeholder="password" class="inputs-p2-enter"/>
                </div>
                <br/>
                <button class="login-button">
                    Login
                </button>
            </div>
          </div>
    </>
  )
}

export default Login