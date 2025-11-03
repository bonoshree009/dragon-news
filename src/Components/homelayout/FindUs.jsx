import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className=''>
            <h1 className='font-bold'>Find Us On</h1>
            <div className="join join-vertical w-full">
  <button className="btn join-item bg-base-100  justify-start ">  <FaFacebook size={25}></FaFacebook>    FaceBook</button>
  <button className="btn join-item bg-base-100  justify-start">  <AiFillTwitterCircle size={25}/> Twitter</button>
  <button className="btn join-item bg-base-100  justify-start"> <FaInstagram size={25}/> Istragram</button>
</div>
        </div>
    );
};

export default FindUs;