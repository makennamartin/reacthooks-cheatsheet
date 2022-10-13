import React from "react";
import ModalEffect from "./modals/ModalEffect";
import effectimg from '../assets/effectcode.png';

const UseEffect = () => {
     return(
        <div data-aos="fade-up" data-aos-duration="2100" className="item relative w-full max-w-6xl rounded-3xl shadow-inner-white drop-shadow-md flex flex-col md:flex-row" id="useeffect">
            <div className="md:w-1/2 flex flex-col space-y-4 p-10 md:py-20 md:pl-16">
               <h1 className="text-3xl text-center">useEffect</h1>
               <h4>Allows you to perform side effects in your components.</h4>

               <h4>Accepts two arguments: the function, and the optional dependency array</h4>

               <h4 className="border-2 border-[#678FFF] p-2">Syntax: useEffect(function, dependency)</h4>

               <h4 className="underline underline-offset-4">When to use:</h4>
        
                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>API calls/fetching data</p>
                    </div>
                </div>

                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>Timer functions</p>
                    </div>
                </div>

                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>DOM manipulations</p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none flex flex-col top-0 right-0 z-0 md:w-1/2 justify-center p-5">
               <img src={effectimg} alt="..."/>
            </div>
        </div>

     )
}
export default UseEffect;