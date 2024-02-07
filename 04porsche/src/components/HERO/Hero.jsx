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
                    <div className="TheItem car-1 w-52 h-52 inline-block bg-cover bg-no-repeat rounded-3xl p-5 shadow-2xl bg-center">
                        <div className="TheContent  rounded-lg  text-right p-0 text-black" >
                            <div className="TheName text-black text-8xl"> PORSCHE 911 </div>
                            <div className="TheText text-black text-2xl"> 
                                Rear-engine, rear-wheel/all-wheel drive sports coupe, targa top and convertible. 
                            </div>
                            <button className="button-89 text-black"> See more </button>
                        </div>
                    </div>
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
    <div className="bg-gray-100 TheSecoundBoxText text-5xl p-7 shadow-lg m-0 text-center justify-center flex flex-col items-center">
                <img src="https://i.ibb.co/6r9FmKb/IMG-14.png" alt="" className='w-min h-20' />
    </div>
    <div className='TheThirdBox bg-gray-300 animationShowContent'>
          <div className="TheModelBox1 grid grid-cols-2">
                <div className="TheModelCar1 text-white h-60 bg-cover bg-center bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">THE 911</span>
                        <span> BUY NOW </span>
                    </button>
                </div>
                <div className="TheModelCar2 text-white h-60 bg-cover bg-no-repeat bg-top">
                    <button class="button-57" role="button">
                        <span class="text"> PANAMERA 4 </span>
                        <span> BUY NOW </span>
                    </button>
                </div>
                <div className="TheModelCar3 text-white h-60 bg-cover bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">THE PANAMERA </span>
                        <span> BUY NOW </span>
                    </button>
                </div>
                <div className="TheModelCar4 text-white h-60 bg-cover bg-no-repeat">
                    <button class="button-57" role="button">
                        <span class="text">TAYCAN</span>
                        <span> BUY NOW </span>
                    </button>
                </div>
          </div>
          <div className="TheModelBox2">
                <div className="TheModelCar5 text-white h-96 bg-cover bg-no-repeat bg-center">
                <button class="button-57" role="button">
                        <span class="text">THE 911 GT3 rs</span>
                        <span> BUY NOW </span>
                    </button>
                </div>
          </div>
    </div>
    <div className="TheFourthBox bg-gray-300 animationShowContent">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10">
            <img className='w-96' src="https://i.ibb.co/jHgMCV8/911-Cup-MAIN6.jpg" alt="Image"  />
            <div className="w-96 p-5 text-left text-3xl ">
                    Crafted for the discerning. <br /> Step inside the luxury of Porsche interiors and feel the difference.
            </div>
            <div className="TheAboutCard transition-all absolute bottom-5 left-80 text-white backdrop-blur-2xl p-5 rounded-2xl"> Performance Tires <br /> N-rated </div>
        </div>
    </div>
    <div className="TheFourthBox bg-gray-300 animationShowContent">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10">
                    {/* <img className='w-96' src="https://i.ibb.co/jHgMCV8/911-Cup-MAIN6.jpg" alt="Image"  /> */}
                <div className="w-96 p-5 text-left text-3xl ">
                    Where every detail is a masterpiece, and every drive is a work of art. Porsche: Elevate your interior experience
                </div>
                <img className='w-96' src="https://i.ibb.co/YhzJVYB/911-Cup-MAIN7.jpg" alt="Image"  />

                    <div className="TheAboutCard absolute transition-all bottom-5 left-1/2 text-white backdrop-blur-2xl p-5 rounded-2xl"> Customized </div>
        </div>
    </div>
    <div className="TheFourthBox bg-gray-300 animationShowContent">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10">
                    <img className='w-96' src="https://i.ibb.co/8c5TV98/911-Cup-MAIN4.jpg" alt="Image"  />
                <div className="w-96 p-5 text-left text-3xl ">
                Elevate your surroundings, elevate your drive. Porsche interiors, where luxury meets performance.
                </div>
                    <div className="TheAboutCard absolute transition-all bottom-5 left-80 text-white backdrop-blur-2xl p-5 rounded-2xl"> High-Quality Materials </div>
        </div>
    </div>
    <div className="TheFourthBox bg-gray-300 animationShowContent">
        <div className="TheAbout-1 text-center flex justify-center items-center p-10">
                <div className="w-96 p-5 text-left text-3xl ">
                    A cockpit of distinction. Porsche interiors – designed for those who demand more
                </div>
                <img className='w-96' src="https://i.ibb.co/8rkspmK/911-Cup-MAIN5.jpg" alt="Image"  />
                <div className="TheAboutCard absolute transition-all bottom-5 left-1/2 text-white backdrop-blur-2xl p-5 rounded-2xl"> Driver-Centric <br /> Cockpit </div>
        </div>
    </div>
    
    {/* <div className="TheSecoundBox bg-gray-300 animationShowContent">

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
    </div> */}
    </>
  )
}

export default Hero