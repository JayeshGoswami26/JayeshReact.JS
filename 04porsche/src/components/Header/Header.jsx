import React from 'react'
import {Link, NavLink} from 'react-router-dom'




function Header() {
  return (
    <>
    
    <nav class="bg-white dark:bg-gray-300 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link class="flex items-center">
              <img src="https://i.ibb.co/HDPD5kx/IMG-15.png" class="animationShowContent h-10 mr-3" alt="Flowbite Logo"/>
              <img src="https://i.ibb.co/6r9FmKb/IMG-14.png" class="animationShowContent h-10 mr-3" alt="Flowbite Logo"/>
          </Link>
          <div class="flex md:order-2">
              <NavLink to='Login' className={e => (e.isActive ? "text-white bg-gray-500 Loginbutton animationShowContent block m-3" : "Loginbutton animationShowContent block m-3")}>
                LOG-IN
              </NavLink>
          </div>
          
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">

            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-300 md:dark:bg-gray-300 dark:border-gray-300">
              <li>
                <NavLink to= '/' className={e => (e.isActive ? "text-white  bg-gray-500 Loginbutton animationShowContent block m-3" : "Loginbutton animationShowContent block m-3")}>
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink to= 'Models' className={e => (e.isActive ? "text-white bg-gray-500 Loginbutton animationShowContent block m-3" : "Loginbutton animationShowContent block m-3")}>
                  MODELS
                </NavLink>
              </li>
              <li>
                <NavLink to='Social' className={e => (e.isActive ? "text-white  bg-gray-500 Loginbutton animationShowContent block m-3" : "Loginbutton animationShowContent block m-3")}>
                  SOCIAL
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </nav>

    </>
  )
}

export default Header