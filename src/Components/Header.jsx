import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
           <img  className=" w-[400px]"   src={logo} alt="" />
           <h1 className="text-gray-400" >Journalism Without Fear or Favour</h1>
           <p>{format(new Date(),'EEEE, MMMM dd, yyyy')}</p>

        </div>
    );
};

export default Header;