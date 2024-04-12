import React, { useState } from 'react'
import { motion } from "framer-motion"
function Loder() {
  const [Visible, setVisible] = useState(true)
  setTimeout(() => {
    setVisible(false)
  }, 3500);
  return (
    <>
      <motion.div 
        initial={{ opacity: 1}}
        animate={{ opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay : 3.5,
        }}
        className={`absolute overflow-hidden bg-gray-500 w-full h-screen ${Visible? '': 'hidden'}`}>
        <div className="TheCustomLoderBg bg-cover bg-no-repeat absolute overflow-hidden bg-gray-500 w-full h-screen">
          <div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
        <motion.div className=" flex text-4xl absolute justify-center items-center w-full h-4/6 text-white z-20 ThecustomThemeFont">
          
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 0.5,
              }}
            className="">I</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 0.7,
              }}
            className="">N</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 0.9,
              }}
            className="">J</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 1.1,
              }}
            className="">U</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 1.3,
              }}
            className="">S</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 1.5,
              }}
            className="">T</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 1.7,
              }}
            className="">I</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 1.9,
              }}
            className="">C</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 2.1,
              }}
            className="">E</motion.div>
          <motion.div className="px-2"> </motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 2.3,
              }}
            className="">G</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 2.5,
              }}
            className="">O</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 2.7,
              }}
            className="">D</motion.div>
          <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay : 2.9,
              }}
            className="">S</motion.div>
        </motion.div>

        <div className='spinner '></div>
      </motion.div>
    </>
  )
}

export default Loder