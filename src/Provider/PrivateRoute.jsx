import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRroute = ({children}) => {
    const {user,loding} =use(AuthContext)
    const location =useLocation()
    if(loding){
        return <div className='flex justify-center items-center w-20'><span className="loading loading-spinner text-error "></span></div>
    }
    if(user && user?.email){
        return children
    }
    else{
        return <Navigate state={location.path} to="/auth/login"></Navigate>
    }
};

export default PrivateRroute;