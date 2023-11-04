import React from 'react'
import { Link } from 'react-router-dom'

function Social() {
  return (
      <> 
             <div className=" gap-4 p-7 text-center bg-slate-600 text-white text-5xl flex justify-center items-center z-50"> Login To get in
                    <br />
                   PORSCHE SOCIAL </div>
            <section id="sign-in">
              <div class="part-3">
                  <h1 class="heading-p1"></h1>
                  <p class="text-p1"></p>
              </div>
              <div class="part-4">
                <h2 class="headingp2"> Sign in </h2>
                <p class="text-p2"> 
                    Already have an account? <br /> <Link to='' id="text-p2-link"> Login!. </Link>
                </p>
              <div class="inputs-p2">
                  <input type="text" placeholder="User name" class="inputs-p2-enter" required />
                  <br /> 
                  <input type="text" placeholder=" Last name " class="inputs-p2-enter" required />
                  <br/>
                  <input type="text" placeholder=" Address " class="inputs-p2-enter" required />
                  <br />
                  <input type="email" placeholder=" Email " class="inputs-p2-enter" required />
                  <br />
                  <input type="number" placeholder=" Phone number " class="inputs-p2-enter" required />
                  <br />
                  <input type="password" placeholder="Password" class="inputs-p2-enter" required />
                  <br />
                  <input type="password" placeholder=" Re-enter Password" class="inputs-p2-enter" required />
                  <br />
              </div>
              <br />
              <button class="login-button">
                  Login
              </button>
              </div>
            </section>
      </>
  )
}

export default Social