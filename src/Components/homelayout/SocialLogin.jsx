import React from 'react';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';


const SocialLogin = () => {
    return (
        <div>
          <p className='font-bold mb-5'>Login With</p>
          <div className='space-y-3 '>
            <button className='btn btn-outline w-full btn-secondary'>   <FcGoogle  size={30}/>  Login With Google </button>
          <button className='btn btn-outline w-full btn-primary'> <FaGithub  size={30} /> Login With GitHub</button></div>
        </div>
    );
};

export default SocialLogin;