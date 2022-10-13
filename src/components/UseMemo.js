import React from "react";
import memo from '../assets/usememo.png';

const UseMemo= () => {

   
     return(
        <div data-aos="fade-up" data-aos-duration="1900" className="item relative w-full max-w-6xl rounded-3xl shadow-inner-white drop-shadow-md flex flex-col md:flex-row" id="usememo">
            <div className="md:w-1/2 flex flex-col space-y-4 p-10 md:py-20 md:pl-16">
                <h1 className="text-3xl text-center">useMemo</h1>
                <h4>Accepts a function and a list of dependencies as arguments and returns the memoized value returned by the function passed.</h4>
                <h4>It recalculates the value only when one of its dependencies change.</h4>
                <h6 className="border-2 border-[#678FFF] p-2">The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</h6>
                <h4 className="underline underline-offset-4">When to use:</h4>
        
                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>To avoid expensive calculations on every render when the returned value is not going to change</p>
                    </div>
                </div>

                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>Performance optimization</p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none flex flex-col top-0 right-0 z-0 md:w-1/2 justify-center p-5">
                <img src={memo} alt="..."/>
            </div>
        </div>

     )
}
export default UseMemo;