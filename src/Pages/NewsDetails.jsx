import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import RightAside from '../Components/homelayout/RightAside'
import NewsDetailscard from '../Components/NewsDetailscard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data =useLoaderData()
    const {id}= useParams()
    const [news ,setNews] = useState({})

    useEffect(()=>{
         const newsdetails =data.find((news)=> news.id == id);
         setNews(newsdetails)

    },[data,id])
    return (
        <div>
           <header className='py-3'>
           <Header></Header>
           </header>
           <main className='w-11/12 mx-auto grid grid-cols-12 gap-5'> 
            <section className='col-span-9'>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailscard news={news}></NewsDetailscard>
            </section>
            <aside className='col-span-3'> <RightAside></RightAside> </aside>
           </main>
        </div>
    );
};

export default NewsDetails;