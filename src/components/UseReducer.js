import React from "react";
import reducer from '../assets/usereducer.png';


const UseReducer = () => {
     return(
        <div data-aos="fade-up" data-aos-duration="1900" className="item relative w-full max-w-6xl rounded-3xl shadow-inner-white drop-shadow-md flex flex-col md:flex-row" id="usereducer">
         <div className="md:w-1/2 flex flex-col space-y-4 p-10 md:py-20 md:pl-16">
            <h1 className="text-3xl text-center">useReducer</h1>
            <h4>A useState alternative that allows updating/handling multiple states at once.</h4>
            <h4>Accepts 2 arguments, a reducer function that contains your custom state logic and the initial State which may be a simple value but generally will contain an object. Returns the current state and a dispatch method.</h4>
            {/* <h2>How: Create variable that holds all the states, then dispatch to use to change val of all the states</h2> */}
            
            <h4 className="underline underline-offset-4">When to use:</h4>
            <div className="flex flex-row mb-4">
               <div className="w-1/5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
               </div>
               <div className="w-4/5">
                  <p>When keeping track of multiple pieces of state that rely on complex logic</p>
               </div>
            </div>
         </div>
         <div className="pointer-events-none flex flex-col top-0 right-0 z-0 md:w-1/2 justify-center p-5">
            <img className="object-contain" src={reducer} alt="..."/>
         </div>
        </div>

     )
}
export default UseReducer;