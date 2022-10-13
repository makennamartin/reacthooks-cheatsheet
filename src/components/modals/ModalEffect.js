import React,{useState} from "react";
import ex1 from '../../assets/e1.png';
import ex2 from '../../assets/e2.png';
import ex3 from '../../assets/e3.png';
import ex4 from '../../assets/e4.png';

const EffectState = () => {
     return(
        <>
<label htmlFor="my-modal-6" className="btn modal-button">Details</label>

<input type="checkbox" id="my-modal-6" className="modal-toggle" />

<div className="modal">
  <div className="modal-box relative text-sm text-black">
    <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3>runs on every render unless the optional second parameter (dependency array) is used. That means that when the count changes, a render happens, which then triggers another effect</h3>
    <h3>Controlling renders:</h3>
    <h4>1. If you want it to run once, on first render</h4>
    <img src={ex1} alt="..."/>
    <h4>2. On state or props change</h4>
    <img src={ex2} alt="..."/>
    <h4>3. On unmount</h4>
    <img src={ex3} alt="..."/>
    <h4>4. On every render</h4>
    <img src={ex4} alt="..."/>

  </div>
  </div>

    
        </>

     )
}
export default EffectState;