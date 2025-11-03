import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
             <div className="flex justify-center items-center ">
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold text-center pt-6 text-2xl'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
             <label className="label">Your Name</label>
          <input type="text" className="input" placeholder="Enter your name here" />
           <label className="label">Photo Url</label>
          <input type="e" className="input" placeholder="enter your photo url" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass'/>
        
          <button className="btn btn-neutral mt-4">Register</button>
          <h1>Already Have An Account ? <Link to='/auth/Login' className='text-secondary'>Login</Link></h1>
        </fieldset>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;