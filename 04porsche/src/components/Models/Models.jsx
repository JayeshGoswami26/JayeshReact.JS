import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Keyboard, EffectCoverflow, Parallax } from 'swiper/modules';

import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function Models() { 
  return (
     <>
     {/* THE 911 gt3 rs */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#232323',
          '--swiper-pagination-color': '#232323',
        }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
        autoplay = {{delay: 10000}}
        speed={2000}
        parallax={true}
        navigation ={{}}
        pagination= {{clickable: true,}}
        keyboard ={{enabled: true}}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'
    >   
        <div className="parallax-bg THE911_RS bg-no-repeat SliderHeights" data-swiper-parallax="-20%" slot="container-start"></div>
        <SwiperSlide className='animationShowContent'>
          <div className="text-left JapanFont SliderHeights text-gray-300 text-7xl pl-7 pt-20 " data-swiper-parallax="-300">
            THE 911 GT3 RS
            <div className="pt-6 text-5xl" data-swiper-parallax="-5000">It’s always cool to be seen</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center animationShowContent SliderHeights text-gray-300 text-4xl' >
          <div className="flex justify-center gap-32 top-14 absolute right-10" data-swiper-parallax="-300">
            <div className="font-bold text-center pl-5 ">
              <img src="https://i.ibb.co/TPWHnd7/energetic.png" alt="energetic" className='w-9 h-9 text-center ml-28' />
              386KW/525PS
              <div className="text-2xl font-thin JapanFont">Power (KW)/Power (PS)</div>
            </div>

            <div className="font-bold text-center pl-5 " data-swiper-parallax="-3000">
            <img src="https://i.ibb.co/2FTTDwr/performance.png" alt="performance" className='w-9 h-9 text-center ml-24' />
              
            3,2 s
              <div className="text-2xl font-thin JapanFont">Acceleration 0-100 km/h</div>
            </div>
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-6000">
              <img src="https://i.ibb.co/qDyKsHK/stopwatch.png" alt="stopwatch" className='w-9 h-9 text-center ml-14' />
              296 Km/h
              <div className="text-2xl font-thin JapanFont">Top Speed</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center SliderHeights text-white text-4xl animationShowContent' data-swiper-parallax="-300">
          <div className="right-10 top-20 flex flex-col gap-36 absolute" data-swiper-parallax="-300">
            <button class="button-49" role="button"> TECHNICAL SPECS </button>
            <button class="button-49" role="button"> BUY NOW </button>
            <button class="button-49" role="button"> COMPARE </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* THE PANAMERA  4 E-HYBRID */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#232323',
          '--swiper-pagination-color': '#232323',
        }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
        autoplay = {{delay: 10000}}
        speed={2000}
        parallax={true}
        navigation ={{}}
        pagination= {{clickable: true,}}
        keyboard ={{enabled: true}}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'
    >   
        <div className="parallax-bg THE-PANAMERA_E bg-no-repeat SliderHeights" data-swiper-parallax="-20%" slot="container-start"></div>
        <SwiperSlide className='animationShowContent'>
          <div className="text-left JapanFont  SliderHeights text-gray-700 text-7xl pl-7 pt-20 " data-swiper-parallax="-300">
            THE PANAMERA  4 E-HYBRID
            <div className="pt-6 text-5xl" data-swiper-parallax="-5000">The design you always admire!</div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='text-center animationShowContent SliderHeights text-gray-700 text-4xl' >
          <div className="flex justify-center gap-32 top-14 absolute right-10" data-swiper-parallax="-300">
            <div className="font-bold text-center pl-5 ">
              <img src="https://i.ibb.co/TPWHnd7/energetic.png" alt="energetic" className='w-9 h-9 text-center ml-28' />
              340KW/462PS
              <div className="text-2xl font-thin JapanFont">Power (KW)/Power (PS)</div>
            </div>

            <div className="font-bold text-center pl-5 " data-swiper-parallax="-3000">
            <img src="https://i.ibb.co/2FTTDwr/performance.png" alt="performance" className='w-9 h-9 text-center ml-24' />
              
              4,4 s
              <div className="text-2xl font-thin JapanFont">Acceleration 0-100 km/h</div>
            </div>
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-6000">
              <img src="https://i.ibb.co/qDyKsHK/stopwatch.png" alt="stopwatch" className='w-9 h-9 text-center ml-14' />
              280 Km/h
              <div className="text-2xl font-thin JapanFont">Top Speed</div>
            </div>
          </div>
        </SwiperSlide>

        

        <SwiperSlide className='animationShowContent text-center SliderHeights text-white text-4xl' data-swiper-parallax="-300">
          <div className="right-10 top-20 flex flex-col gap-36 absolute" data-swiper-parallax="-300">
            <button class="button-49 PanameraButton" role="button"> TECHNICAL SPECS </button>
            <button class="button-49 PanameraButton" role="button"> BUY NOW </button>
            <button class="button-49 PanameraButton" role="button"> COMPARE </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* THE 911 CARRERA */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#bfbfbf',
          '--swiper-pagination-color': '#bfbfbf',
        }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
        autoplay = {{delay: 10000}}
        speed={2000}
        parallax={true}
        navigation ={{}}
        pagination= {{clickable: true,}}
        keyboard ={{enabled: true}}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'
    >   
        <div className="parallax-bg THE911-CARRERA bg-no-repeat SliderHeights" data-swiper-parallax="-20%" slot="container-start"></div>
        <SwiperSlide className='animationShowContent'>
          <div className="text-left JapanFont SliderHeights text-gray-300 text-7xl pl-7 pt-20 " data-swiper-parallax="-300">
            THE 911 CARRERA
            <div className="pt-6 text-5xl" data-swiper-parallax="-5000">Have no fear of perfection</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center SliderHeights text-white text-4xl animationShowContent' >
          <div className="flex justify-center gap-32 top-8 absolute right-11" data-swiper-parallax="-300">
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-300">
              <img src="https://i.ibb.co/TPWHnd7/energetic.png" alt="energetic" className='w-9 h-9 text-center ml-28' />
              283KW/385PS
              <div className="text-2xl font-thin JapanFont">Power (KW)/Power (PS)</div>
            </div>

            <div className="font-bold text-center pl-5 " data-swiper-parallax="-3000">
            <img src="https://i.ibb.co/2FTTDwr/performance.png" alt="performance" className='w-9 h-9 text-center ml-24' />
              
              4,2 s
              <div className="text-2xl font-thin JapanFont">Acceleration 0-100 km/h</div>
            </div>
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-6000">
              <img src="https://i.ibb.co/qDyKsHK/stopwatch.png" alt="stopwatch" className='w-9 h-9 text-center ml-14' />
              293 Km/h
              <div className="text-2xl font-thin JapanFont">Top Speed</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='animationShowContent text-center SliderHeights text-white text-4xl' data-swiper-parallax="-300">
          <div className="right-10 top-20 flex flex-col gap-36 absolute" data-swiper-parallax="-300">
            <button class="button-49 CarreraButton" role="button"> TECHNICAL SPECS </button>
            <button class="button-49 CarreraButton" role="button"> BUY NOW </button>
            <button class="button-49 CarreraButton" role="button"> COMPARE </button>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* THE TYCAN */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#bfbfbf',
          '--swiper-pagination-color': '#bfbfbf',
        }}
        modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y, Keyboard, EffectCoverflow, Parallax]}
        autoplay = {{delay: 10000}}
        speed={2000}
        parallax={true}
        navigation ={{}}
        pagination= {{clickable: true,}}
        keyboard ={{enabled: true}}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='mySwiper'
    >   
        <div className="parallax-bg THETYCAN bg-no-repeat SliderHeights" data-swiper-parallax="-20%" slot="container-start"></div>
        <SwiperSlide className='animationShowContent'>
          <div className="text-left JapanFont SliderHeights text-gray-300 text-7xl pl-7 pt-20 " data-swiper-parallax="-300">
            THE TAYACAN
            <div className="pt-6 text-5xl" data-swiper-parallax='-5000'>Dreams don't work <br /> unless you do</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='text-center SliderHeights text-white text-4xl animationShowContent' >
          <div className="flex justify-center gap-32 top-5 absolute left-10" data-swiper-parallax="-300">
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-300">
              <img src="https://i.ibb.co/TPWHnd7/energetic.png" alt="energetic" className='w-9 h-9 text-center ml-28' />
              300KW/480PS
              <div className="text-2xl font-thin JapanFont">Power (KW)/Power (PS)</div>
            </div>

            <div className="font-bold text-center pl-5 " data-swiper-parallax="-3000">
            <img src="https://i.ibb.co/2FTTDwr/performance.png" alt="performance" className='w-9 h-9 text-center ml-24' />
              
              5,4 s
              <div className="text-2xl font-thin JapanFont">Acceleration 0-100 km/h</div>
            </div>
            <div className="font-bold text-center pl-5 " data-swiper-parallax="-6000">
              <img src="https://i.ibb.co/qDyKsHK/stopwatch.png" alt="stopwatch" className='w-9 h-9 text-center ml-14' />
              230 Km/h
              <div className="text-2xl font-thin JapanFont">Top Speed</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='animationShowContent text-center SliderHeights text-white text-4xl' data-swiper-parallax="-300">
          <div className="right-10 top-20 flex flex-col gap-36 absolute" data-swiper-parallax="-300">
            <button class="button-49 TayagnButton" role="button"> TECHNICAL SPECS </button>
            <button class="button-49 TayagnButton" role="button"> BUY NOW </button>
            <button class="button-49 TayagnButton" role="button"> COMPARE </button>
          </div>
        </SwiperSlide>
      </Swiper>

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

   </>
   

  )
}

export default Models