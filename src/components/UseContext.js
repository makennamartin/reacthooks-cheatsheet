import React,{useState,useEffect} from "react";
import context from '../assets/usecontext.png';
import AOS from "aos";
import "aos/dist/aos.css";

const UseContext = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

     return(
        <div data-aos="fade-up" data-aos-duration="2100" className="item relative w-full max-w-6xl rounded-3xl shadow-inner-white drop-shadow-md flex flex-col md:flex-row" id="usecontext">
            <div className="md:w-1/2 flex flex-col space-y-4 p-10 md:py-20 md:pl-16">
                <h1 className="text-3xl text-center">useContext</h1>
                <h4>React Context API is a method to pass props from parent to child component(s), by storing the props in a store(similar in Redux) and using these props from the store by child component(s) without actually passing them manually at each level of the component tree.</h4>
                <h4>The main idea of using the context is to allow your components to access global state and re-render when that global state is changed.</h4>

                <h4 className="underline underline-offset-4">When to use:</h4>
        
                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                        <p>When you want to avoid prop drilling (passing props to deeply nested components)</p>
                    </div>
                </div>
                <div className="flex flex-row mb-4">
                    <div className="w-1/5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="50" height="22"><path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd"></path></svg>
                    </div>
                    <div className="w-4/5">
                    <p>When you want a simpler method to access global state than Redux</p>
                    </div>
                </div>

            </div>
            <div className="pointer-events-none flex flex-col top-0 right-0 z-0 md:w-1/2 justify-center p-5">
                <img src={context} alt="..."/>
            </div>
        </div>

     )
}
export default UseContext;