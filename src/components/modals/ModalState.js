import React,{useState} from "react";

const ModalState = () => {
     return(
        <>
<label htmlFor="my-modal-1" className="btn modal-button">Details</label>

<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<label htmlFor="my-modal-1" className="modal cursor-pointer">
  <label className="modal-box relative text-lg font-bold text-black" for="">
    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
  </label>
</label>
        </>

     )
}
export default ModalState;