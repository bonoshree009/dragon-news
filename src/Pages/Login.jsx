import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
      <div className="flex justify-center items-center ">
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold text-center pt-6 text-2xl'>Login your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"name='email' />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass'/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <h1>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></h1>
        </fieldset>
      </div>
    </div>
  </div>

    );
};

export default Login;