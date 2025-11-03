import React from 'react';
import swim from '../../assets/swimming.png'
import classroom from '../../assets/class.png'
import play from '../../assets/playground.png'



const QZone = () => {
    return (
        <div className='bg-gray-300 p-3'>
           <h1 className='font-bold '>Q-Zone</h1> 
           <div className='flex justify-center flex-col p-3'>
            <img src={swim} alt="" />
            <img src={classroom} alt="" />
            <img src={play} alt="" />
           </div>
        </div>
    );
};

export default QZone;