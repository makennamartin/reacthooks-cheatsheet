import React,{useState} from "react";
import code from '../assets/usestate.png';
import ModalState from "./modals/ModalState";

const UseState = () => {
     return(
        <div data-aos="fade-up" data-aos-duration="1900" className="item relative w-full max-w-6xl rounded-3xl shadow-inner-white drop-shadow-md flex flex-col md:flex-row" id="usestate">
            <div className="md:w-1/2 flex flex-col space-y-4 p-10 md:py-20 md:pl-16">
                <h1 className="text-3xl text-center">useState</h1>
                <h4>Returns a stateful value and a function to update it.</h4>
                <h4>It is the most important and often used hook. The purpose of this hook to handle reactive data. Any data that changes in the application is called state, and when any of the data changes, React re-renders the UI.</h4>
                <h4>useState is used instead of a simple variable because when state is updated, our component re-renders, usually to display that updated value.</h4>
                <h4>We use array destructuring on the value returned from useState to access (1) the stored state and (2) a function to update that state.</h4>
                
            </div>
            <div className="pointer-events-none flex flex-col top-0 right-0 z-0 md:w-1/2 justify-center p-5">
                <img className="object-contain" src={code} alt="..."/>
                {/* <ModalState/> */}
            </div>
        </div>

     )
}
export default UseState;