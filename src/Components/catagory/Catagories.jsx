import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoripromise =fetch('categories.json').then(res => res.json())

const Catagories = () => {
    const categories  =use(categoripromise)

    return (
        <div>
            <h1 className='font-bold'> All Catagory : {categories.length}</h1>

            <div className=''>
               <div className='grid grid-cols-1 gap-3 mt-5'>
                 {
                    categories.map((categori) =>(
                        <NavLink to={`/catagori/${categori.id}`} className= ' btn border-0 bg-white hover:bg-base-200 text-gray-5np00' key={categori.id}>{categori.name}</NavLink>
                    ))
                }
               </div>
            </div>
        </div>
    );
};

export default Catagories;