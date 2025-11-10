import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import userlogo from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
  const {user,logOut} =useContext(AuthContext)
  const handlelogOut =()=>
  {
    console.log('user trying to logout')
    logOut().then(()=>{
      alert("User Logged Out")
    }).catch(err => console.log(err))
  }
    return (
        <div className='flex justify-between items-center'>
          <div></div>
          <div className='nav flex gap-5 text-gray-600'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
          </div>
          <div className='login-btn flex gap-5'>
            <img src={`${user? user.photoURL : userlogo }`} alt=""  className='w-12 rounded-full bg-gray-200 p-1'/>
            {user ? ((<button className='btn bg-secondary px-10 ' onClick={handlelogOut}>LogOut</button>)) :
             (<button className='btn btn-primary px-10'><NavLink to='/auth/login'>Login </NavLink></button>)}
            
            </div>
        </div>
    );
};

export default Navbar;