import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard, EffectCoverflow, Parallax } from 'swiper/modules';

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Hero() {
  return (
    <>
    <Swiper
        style={{
            '--swiper-navigation-color': '#bfbfbf',
            '--swiper-pagination-color': '#bfbfbf',
          }}
          modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
          autoplay = {{delay: 5000}}
          loop
          speed={2000}
          navigation
          pagination= {{clickable: true,}}
          keyboard ={{enabled: true}}
          spaceBetween={0}
          slidesPerView={1}
          className='mySwiper bg-gray-300'
    >
                <SwiperSlide className=''>
                    <div className="TheItem car-1 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm rounded-lg w-80 text-left p-0 text-black" >
                            <div className="TheName text-white"> PORSCHE <br /> 911 </div>
                            <div className="TheText text-white"> 
                                Rear-engine, rear-wheel/all-wheel drive sports coupe, targa top and convertible. 
                            </div>
                            <button className="button-89 text-white"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div className="TheItem car-2 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm rounded-lg w-80 text-left p-0 text-black">
                            <div className="TheName"> PORSCHE <br />  Panamera 4 <br />E-Hybrid </div>
                            <div className="TheText">Mid/full-size luxury liftback sedan and station wagon.</div>
                            <button className="button-89"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-3 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm rounded-lg w-80 text-left p-0 text-black">
                            <div className="TheName"> PORSCHE 911 CARRERA</div>
                            <div className="TheText">The one and always.The new 911 S/T.</div>
                            <button className="button-89"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-4 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm rounded-lg w-80 text-left p-0 text-black">
                            <div className="TheName text-white"> PORSCHE Taycan </div>
                            <div className="TheText text-white">Battery electric executive sedan and station wagon. Previewed by the 2015 Porsche Mission E concept. </div>
                            <button className="button-89 text-white"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="TheItem car-5 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent backdrop-blur-sm rounded-lg w-80 text-left p-0 text-black">
                            <div className="TheName text-white"> PORSCHE Panamera </div>
                            <div className="TheText text-white">Mid/full-size luxury liftback sedan and station wagon.</div>
                            <button className="button-89 text-white"> See more </button>
                        </div>
                    </div>
                </SwiperSlide>

    </Swiper>
    <div className="TheSecoundBox bg-gray-300 animationShowContent">
            <div className="bg-gray-100 TheSecoundBoxText text-5xl p-7 shadow-lg m-0 text-center justify-center flex flex-col items-center">
                <img src="https://i.ibb.co/6r9FmKb/IMG-14.png" alt="" className='w-min h-20' />
            </div>
            <div className="flex justify-around p-5">
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    Porsche Explore Porsche lifestyle is a term that refers to the way of living that is inspired by the Porsche brand and  its products. Porsche lifestyle encompasses fashion, accessories, vehicle accessories
                    <button className='button-52 after:bg-indigo-950 text-white animationShowContent'> Read More </button>
                </div>
                <div className="bgIMG1 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
            </div>
            <div className="flex justify-around p-5">
                <div className="bgIMG2 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    Porsche lifestyle is designed for creative drivers who wish to shape their own environment with clarity, excitement, and precision
                    <button className='button-52 after:bg-emerald-900 text-white animationShowContent'> Read More </button>
                </div>
            </div>
            <div className="flex justify-around p-5">
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    Porsche lifestyle is more than just a collection of products. It is a way of expressing one’s passion, personality, and individuality through the Porsche brand
                    <button className='button-52 after:bg-orange-400 animationShowContent'> Read More </button>
                </div>
                <div className="bgIMG3 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
            </div>
            <div className="flex justify-around p-5">
                <div className="bgIMG4 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    Life is too short to drive boring cars. #PorscheLifestyle
                    <button className='button-52 animationShowContent'> Read More </button>
                </div>    
            </div>
            <div className="flex justify-around p-5">
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    The art of performance
                    <button className='button-52 after:bg-yellow-400 animationShowContent'> Read More </button>
                </div>
                <div className="bgIMG5 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
            </div>
            <div className="flex justify-around p-5">
                <div className="bgIMG6 w-full h-96 bg-bottom bg-cover bg-no-repeat"></div>
                <div className="w-full h-96 flex justify-center items-center flex-col p-5 gap-2 animationShowContent">
                    I don’t need therapy, I just need my Porsche. #PorscheLifestyle
                    <button className='button-52 after:bg-gray-600 text-white animationShowContent'> Read More </button>
                </div>    
            </div>
    </div>
    </>
  )
}

export default Hero