import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Header() {
  return (
    <>
      <div className="header p-5 relative">
        <div className=" logo-1 absolute"></div>
        <div className=" logo-2 absolute p-3 cursor-pointer"></div>
        <div className=" text-center">
            <button class="button-89 m-5" role="button"> HOME </button>
            <button class="button-89 m-5" role="button"> MODELS </button>
            <button class="button-89 m-5" role="button"> SOCIAL </button>
            <button class="button-89 m-5" role="button"> LOGIN </button>
        </div>
      </div>
    </>
  )
}

export default Header