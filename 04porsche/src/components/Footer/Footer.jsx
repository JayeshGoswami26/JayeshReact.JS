import React from 'react'
import { useState } from 'react'


function Footer() {
  const [dropDown, setdropDown] = useState(0)
  let numberOfClicked = 0
  const showButtons = ()=>{
    if (numberOfClicked%2 == 0){
      document.getElementById("BUTTON").classList.remove("hidden")
    }else{ 
      document.getElementById("BUTTON").classList.add("hidden")
     }
    numberOfClicked++
    console.log(numberOfClicked);
  }

  return (
    <>
      <div className="Footer p-5 bg-slate-800 w-full text-orange-100">
          <div className="">
            <div className="p-5 ">Change Country/Region:</div>
            <div className=" cursor-pointer p-5 text-xl"  >
              Select Country/Region <button className='OptionButton' onClick={showButtons}></button>
              <div id='BUTTON' className="rounded-xl hidden text-base OptionDropDown">
                <div className=""> ASIA </div>
                <div className=""> AFRICA </div>
                <div className=""> NORTH AMERICA </div>
                <div className=""> SOUTH AMERICA </div>
                <div className=""> ANTARCTICA </div>
                <div className=""> EUROPE </div>
                <div className=""> AUSTRALIA </div>
              </div>
            </div>

            <hr className='line'/>

            <div className="p-5">© 2023 Porsche India - SKODA AUTO Volkswagen India Private Limited - India. 
              <a href="#" className='FooterLinks'> Legal notice. </a>
              <a href="#" className='FooterLinks'>Cookie & Privacy Policy. </a>
              <a href="#" className='FooterLinks'>Corporate Governance. </a>
              <a href="#" className='FooterLinks'></a>
              <a href="#" className='FooterLinks'>Open Source Software Notice. </a>
              <a href="#" className='FooterLinks'>Whistleblower System. </a>
              <a href="#" className='FooterLinks'>Business and Human Rights. </a>
   </div>
        </div>
      </div>
    </>
  )
}

export default Footer