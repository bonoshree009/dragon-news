import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error,seterror] =useState((''))
    const {signIn} =useContext(AuthContext);
    const navigate = useNavigate()
  const handleLogin=(e)=>{
             e.preventDefault(); 
               const email = e.target.email.value;
                 const pass = e.target.pass.value;
            console.log(email,pass);
            signIn(email,pass).then(res =>{
              const user =res.user 
              console.log(user)
              navigate(`${location.state?location.state : "/"}`)
            }).catch(err => {
              console.log(err)
              seterror("incorrect email or password")

            })
    
  }
    return (
      <div className="flex justify-center items-center ">
  
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className='font-bold text-center pt-6 text-2xl'>Login your account</h2>
      <form onSubmit={handleLogin}>
       < div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"name='email' required />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name='pass' required/>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          {
            error && <p className='text-red-600'>{error}</p>
          }
          <h1>Dont’t Have An Account ? <Link to='/auth/register' className='text-secondary'>Register</Link></h1>
        </fieldset>
      </div>
      </form>
    </div>
  </div>

    );
};

export default Login;