import React from 'react'

function Hero() {
  const TheNextButton = ()=>{
    let lists = document.querySelectorAll('.TheItem')
    console.log(lists);
    document.getElementById('TheSlides').appendChild(lists[0])
  }
  const ThePrveButton = ()=>{
    let lists = document.querySelectorAll('.TheItem')
    document.getElementById('TheSlides').prepend(lists[lists.length-1])
  }

  return (
    <>
    <div className="TheMainBox">
    <div className="TheContainer">
        <div id="TheSlides">

            <div className="TheItem car-1">
                <div className="TheContent">
                    <div className="TheName"> PORCHE </div>
                    <div className="TheText"> 
                        911, It has been featured in many movies, such as Bad Boys, Gone in 60 Seconds 
                    </div>
                    <button className="button-89"> See more </button>
                </div>
            </div>


            <div className="TheItem car-2">
                <div className="TheContent">
                    <div className="TheName"> PORCHE </div>
                    <div className="TheText"> Lorem ipsum dolor sit amet. </div>
                    <button className="button-89"> See more </button>
                </div>
            </div>


            <div className="TheItem car-3">
                <div className="TheContent">
                    <div className="TheName"> NAME </div>
                    <div className="TheText"> Lorem ipsum dolor sit amet. </div>
                    <button className="button-89"> See more </button>
                </div>
            </div>


            <div className="TheItem car-4">
                <div className="TheContent">
                    <div className="TheName"> NAME </div>
                    <div className="TheText"> Lorem ipsum dolor sit amet. </div>
                    <button className="button-89"> See more </button>
                </div>
            </div>


            <div className="TheItem car-5">
                <div className="TheContent">
                    <div className="TheName"> NAME </div>
                    <div className="TheText"> Lorem ipsum dolor sit amet. </div>
                    <button className="button-89"> See more </button>
                </div>
            </div>

        </div>
    </div>
    <div className="TheButton">
                <button id='prev' onClick={ThePrveButton} className='The1ndButton button-64 shadow-lg'><i class="fa-solid fa-angles-left"></i></button>
                <button id='next' onClick={TheNextButton} className='The2ndButton button-64 shadow-lg'><i class="fa-solid fa-angles-right"></i></button>
    </div>
    </div>
    </>
  )
}

export default Hero