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
            <div className="p-5 text-xl"  >
              Select Country/Region <button className='OptionButton w-8 h-8 bg-contain p-3 ml-3' onClick={showButtons}></button>
              <div id='BUTTON' className="rounded-xl hidden text-base OptionDropDown p-3 pl-8 w-1/4">
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> ASIA </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> AFRICA </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> NORTH AMERICA </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> SOUTH AMERICA </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> ANTARCTICA </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> EUROPE </div>
                <div className=" hover:bg-slate-200 transition-all hover:text-black cursor-pointer"> AUSTRALIA </div>
              </div>
            </div>

            <hr className='line'/>

            <div className="p-5">© 2023 Porsche India - SKODA AUTO Volkswagen India Private Limited - India. 
              <a href="https://www.porsche.com/middle-east/_india_/legal-notice/" className='FooterLinks'> Legal notice. </a>
              <a href="https://www.porsche.com/middle-east/_india_/aboutporsche/importers/cookie-privacy-policy/" className='FooterLinks'>Cookie & Privacy Policy. </a>
              <a href="https://www.porsche.com/middle-east/_india_/corporategovernance/" className='FooterLinks'>Corporate Governance. </a>
              <a href="https://www.porsche.com/licenses" className='FooterLinks'>Open Source Software Notice. </a>
              <a href="https://www.porsche.com/middle-east/_india_/aboutporsche/overview/compliance/whistleblower-system/" className='FooterLinks'>Whistleblower System. </a>
              <a href="https://www.porsche.com/middle-east/_india_/human-rights/" className='FooterLinks'>Business and Human Rights. </a>
   </div>
        </div>
      </div>
    </>
  )
}

export default Footer