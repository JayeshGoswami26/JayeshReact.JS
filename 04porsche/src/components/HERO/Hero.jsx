import React, { useEffect, useRef } from 'react'
import {motion,useInView,useAnimation} from "framer-motion"
import {Link, NavLink} from 'react-router-dom' 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard, EffectCoverflow, Parallax } from 'swiper/modules';

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Hero() {
  return (
    <div className='overflow-hidden'>
    <Swiper
         
        style={{
            '--swiper-navigation-color': '#bfbfbf',
            '--swiper-pagination-color': '#bfbfbf',
          }}
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
          autoplay = {{delay: 10000}}
          loop
          speed={2000}
          navigation
          pagination= {{clickable: true,}}
          keyboard ={{enabled: true}}
          spaceBetween={0}
          slidesPerView={1}
          className='mySwiper bg-gray-300'
    >
                <SwiperSlide >
                    <motion.div 
                        variants={
                            {hidden : {opacity:0, y: 75} , visible: {opacity: 1, y: 0}} 
                        }
                        initial= "hidden"
                        animate= "visible"
                        transition={{duration: 1, delay:0.25}} className="TheItem car-1 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent  rounded-lg  text-right p-0 text-black" >
                            <div className="TheName text-black text-8xl"> PORSCHE 911 </div>
                            <div className="TheText text-black text-2xl"> 
                                Rear-engine, rear-wheel/all-wheel drive sports coupe, targa top and convertible. 
                            </div>
                            <button className="button-89 text-black"> See more </button>
                        </div>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="TheItem car-2 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent  rounded-lg  text-left p-0 text-black">
                            <div className="TheName text-5xl"> PORSCHE Panamera 4 <br />E-Hybrid </div>
                            <div className="TheText text-2xl">Mid/full-size luxury liftback sedan and station wagon.</div>
                            <button className="button-89"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-3 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent  rounded-lg text-right p-0 text-black">
                            <div className="TheName text-5xl"> PORSCHE 911 CARRERA</div>
                            <div className="TheText text-2xl">The one and always.The new 911 S/T.</div>
                            <button className="button-89"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-4 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent text-right p-0  ">
                            <div className="TheName text-amber-200 text-5xl"> PORSCHE Taycan </div>
                            <div className="TheText text-amber-200 text-2xl">Battery electric executive sedan and station wagon. <br /> Previewed by the 2015 Porsche Mission E concept. </div>
                            <button className="button-89 text-amber-200 "> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-5 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm  text-center p-0 text-black">
                            <div className="TheName text-gray-700 text-6xl "> PORSCHE Panamera </div>
                            <div className="TheText text-gray-800 text-2xl ">Mid/full-size luxury liftback <br /> sedan and station wagon.</div>
                            <button className="button-89 text-gray-800"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>

    </Swiper>
    <motion.div 
        variants={
            {hidden : {opacity:0, x:100, }} 
        }
        initial= "hidden"
        whileInView={{opacity:1,y:0,x:0}}
        transition={{duration: 1, delay:0.25}} 
        className="bg-gray-100 TheSecoundBoxText text-5xl p-7 shadow-lg m-0 text-center  overflow-hidden justify-center flex flex-col items-center">
                <img src="https://i.ibb.co/6r9FmKb/IMG-14.png" alt="" className='w-min h-20' />
    </motion.div>
    <motion.div className='TheThirdBox bg-gray-300 '>
          <div className="TheModelBox1 grid grid-cols-2">
                <motion.div 
                    variants={{hide: {opacity:0, x:-75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0}}
                    className="TheModelCar1 text-white h-60 bg-cover bg-center bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">THE 911</span>
                        <span> BUY NOW </span>
                    </button>
                </motion.div>
                <motion.div 
                    variants={{hide: {opacity:0, x:75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0}}
                    className="TheModelCar2 text-white h-60 bg-cover bg-no-repeat bg-top">
                    <button class="button-57" role="button">
                        <span class="text"> PANAMERA 4 </span>
                        <span> BUY NOW </span>
                    </button>
                </motion.div>
                <motion.div 
                    variants={{hide: {opacity:0, x:-60}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0}}
                    className="TheModelCar3 text-white h-60 bg-cover bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">THE PANAMERA </span>
                        <span> BUY NOW </span>
                    </button>
                </motion.div>
                <motion.div 
                    variants={{hide: {opacity:0, x:60}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0}}
                    className="TheModelCar4 text-white h-60 bg-cover bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">TAYCAN</span>
                        <span> BUY NOW </span>
                    </button>
                </motion.div>
          </div>
          <div className="TheModelBox2">
                <motion.div 
                    variants={{hide: {opacity:0, x:100}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0}}
                    className="TheModelCar5 text-white h-96 bg-cover bg-no-repeat bg-center">
                    <button class="button-57" role="button">
                        <span class="text">THE 911 GT3 rs</span>
                        <span> BUY NOW </span>
                    </button>
                </motion.div>
          </div>
    </motion.div>
    <motion.div 
        className="TheFourthBox bg-gray-300 ">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10 relative">
            <img className='w-96' src="https://i.ibb.co/jHgMCV8/911-Cup-MAIN6.jpg" alt="Image"  />
            <motion.div 
                        variants={{hide: {opacity:0, x:-75}}}
                        initial= 'hide'
                        whileInView={{opacity:1,x:0}}
                        transition={{delay:0.5}}
                className="w-96 p-5 text-left text-3xl ">
                    Crafted for the discerning. <br /> Step inside the luxury of Porsche interiors and feel the difference.
            </motion.div>
            <motion.div
                        variants={{hide: {opacity:0, y:75}}}
                        initial= 'hide'
                        whileInView={{opacity:1,y:0}}
                className="TheAboutCard transition-all absolute bottom-5 left-80 text-white backdrop-blur-2xl p-5 rounded-2xl"> Performance Tires <br /> N-rated </motion.div>
        </div>
    </motion.div>
    <div className="TheFourthBox bg-gray-300 ">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10 relative">
                <motion.div 
                    variants={{hide: {opacity:0, x:75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0.5}}
                    className="w-96 p-5 text-left text-3xl ">
                    Where every detail is a masterpiece, and every drive is a work of art. Porsche: Elevate your interior experience
                </motion.div>
                <img className='w-96' src="https://i.ibb.co/YhzJVYB/911-Cup-MAIN7.jpg" alt="Image"  />

                    <motion.div 
                        variants={{hide: {opacity:0, y:75}}}
                        initial= 'hide'
                        whileInView={{opacity:1,y:0}}
                        className="TheAboutCard absolute transition-all bottom-5 left-1/2 text-white backdrop-blur-2xl p-5 rounded-2xl"> Customized </motion.div>
        </div>
    </div>
    <div className="TheFourthBox bg-gray-300 ">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10 relative">
                    <img className='w-96' src="https://i.ibb.co/8c5TV98/911-Cup-MAIN4.jpg" alt="Image"  />
                <motion.div 
                    variants={{hide: {opacity:0, x:-75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0.5}}
                    className="w-96 p-5 text-left text-3xl ">
                Elevate your surroundings, elevate your drive. Porsche interiors, where luxury meets performance.
                </motion.div>
                    <motion.div
                     variants={{hide: {opacity:0, y:75}}}
                     initial= 'hide'
                     whileInView={{opacity:1,y:0}}
                     className="TheAboutCard absolute transition-all bottom-5 left-80 text-white backdrop-blur-2xl p-5 rounded-2xl"> High-Quality Materials </motion.div>
        </div>
    </div>
    <div className="TheFourthBox bg-gray-300">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10 relative">
                <motion.div 
                    variants={{hide: {opacity:0, x:75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,x:0}}
                    transition={{delay:0.5}}
                    className="w-96 p-5 text-left text-3xl ">
                    A cockpit of distinction. Porsche interiors – designed for those who demand more
                </motion.div>
                <img className='w-96' src="https://i.ibb.co/8rkspmK/911-Cup-MAIN5.jpg" alt="Image"  />
                <motion.div
                    variants={{hide: {opacity:0, y:75}}}
                    initial= 'hide'
                    whileInView={{opacity:1,y:0}}
                    className="TheAboutCard absolute transition-all bottom-5 left-1/2 text-white backdrop-blur-2xl p-5 rounded-2xl"> Driver-Centric <br /> Cockpit </motion.div>
        </div>
    </div>
    </div>
  )
}

export default Hero