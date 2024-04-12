import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
// import { IoMdArrowDropdown } from "react-icons/io";
import { Dropdown, DropdownItem } from "flowbite-react";
import Loder from './Loder';
import { motion } from "framer-motion"
import ImgLogo from '../assets/images/BG-Logo-4.png.png'



function Navbar() {
  
  // const [isOpen, setIsOpen] = useState(false); 
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  return (
    <>
    <Loder/>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay : 3.5,
        }}
        className='thecoustomDiv bg-black  p-3 container flex flex-row justify-around flex-wrap text-center text-white text-2xl py-8'
        onMouseMove={changePosition}>
          {/* Cursor style */}
          <div className="cursor-style" ref={cursor} ></div>

        <div className=""> <img src={ImgLogo} className='w-60' alt=""/> </div>

        <div className="flex flex-row gap-5">
          <NavLink to={'/'} className={({isActive}) => isActive ? 'text-gray-500 ThecustomThemeFont':'text-white ThecustomThemeFont'  }>Home</NavLink>
          <div className={'text-white ThecustomThemeFont TheCustomNavDropDown cursor-none'}>
            <Dropdown trigger="hover" label = 'Featurs' renderTrigger={()=> <span>Featurs</span>} inline size='sm' arrowIcon = {false} className='cursor-none'>
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-none">
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Settings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Earnings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Sign out</DropdownItem>
                  </li>
                </ul>
              </div>
            </Dropdown>   
          </div>
          <div className={'text-white ThecustomThemeFont TheCustomNavDropDown cursor-none'}>
            <Dropdown trigger="hover" label = 'Action' renderTrigger={()=> <span>Action</span>} inline size='sm' arrowIcon = {false} className='cursor-none'>
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-none">
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Settings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Earnings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Sign out</DropdownItem>
                  </li>
                </ul>
              </div>
            </Dropdown>   
          </div>
          <div className={'text-white ThecustomThemeFont TheCustomNavDropDown cursor-none'}>
            <Dropdown trigger="hover" label = 'More' renderTrigger={()=> <span>More</span>} inline size='sm' arrowIcon = {false} className='cursor-none'>
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 cursor-none">
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Settings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Earnings</DropdownItem>
                  </li>
                  <li>
                    <DropdownItem  className="block px-4 py-2 hover:bg-gray-100 cursor-none dark:hover:bg-gray-600 dark:hover:text-white">Sign out</DropdownItem>
                  </li>
                </ul>
              </div>
            </Dropdown>   
          </div>
        </div>
      </motion.div>







    </>
  );
}

export default Navbar;
