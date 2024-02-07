import React from 'react'
import { Link } from 'react-router-dom'

function Social() {
  return (
      // <> 
      //        <div className=" gap-4 p-7 text-center bg-slate-600 text-white text-5xl flex justify-center items-center z-50"> Login To get in
      //               <br />
      //              PORSCHE SOCIAL </div>
      //       <section id="sign-in">
      //         <div class="part-3">
      //             <h1 class="heading-p1"></h1>
      //             <p class="text-p1"></p>
      //         </div>
      //         <div class="part-4">
      //           <h2 class="headingp2"> Sign in </h2>
      //           <p class="text-p2"> 
      //               Already have an account? <br /> <Link to='' id="text-p2-link"> Login!. </Link>
      //           </p>
      //         <div class="inputs-p2">
      //             <input type="text" placeholder="User name" class="inputs-p2-enter" required />
      //             <br /> 
      //             <input type="text" placeholder=" Last name " class="inputs-p2-enter" required />
      //             <br/>
      //             <input type="text" placeholder=" Address " class="inputs-p2-enter" required />
      //             <br />
      //             <input type="email" placeholder=" Email " class="inputs-p2-enter" required />
      //             <br />
      //             <input type="number" placeholder=" Phone number " class="inputs-p2-enter" required />
      //             <br />
      //             <input type="password" placeholder="Password" class="inputs-p2-enter" required />
      //             <br />
      //             <input type="password" placeholder=" Re-enter Password" class="inputs-p2-enter" required />
      //             <br />
      //         </div>
      //         <br />
      //         <button class="login-button">
      //             Login
      //         </button>
      //         </div>
      //       </section>
      // </>
      <>
      <div className="bg-gray-100 TheSecoundBoxText text-5xl p-7 shadow-lg m-0 text-center justify-center flex flex-col items-center">
          <img src="https://i.ibb.co/6r9FmKb/IMG-14.png" alt="" className='w-min h-20' />
      </div>
      <div className="TheSecoundBox bg-gray-300 animationShowContent">

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

export default Social