import React from "react";
import mlogo from '../assets/mmlogo.png';


const Footer = () => {
     return(
        <nav className='z-30 w-full transform-gpu transition duration-300 ease-in-out bg-bluegray-900 bg-opacity-90 shadow-lg backdrop-blur-md flex flex-row justify-between p-2 pt-20 items-center'>
            
            <div className="tooltip hover:tooltip-open tooltip-right" data-tip="Created by Makenna Martin">
                <img src={mlogo} height="70px" width="70px"  alt="..."/>
            </div>
            <a href="www.makenna-martin.com" className="font-semibold text-[#678FFF] hover-underline-animation">makenna-martin.com</a>
        </nav>

     )
}
export default Footer;