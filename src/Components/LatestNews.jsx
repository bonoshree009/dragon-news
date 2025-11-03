import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
         <p className='text-base-100 bg-secondary px-3 py-2'>latest</p> 
        
        <Marquee className='flex gap-3' pauseOnHover={true} speed={20}> <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem amet porro ad aliquam molestias minima provident, at in autem libero quisquam! Voluptatem officiis atque fuga, praesentium laborum vitae assumenda explicabo?</p> 
</Marquee>
        </div>
    );
};

export default LatestNews;