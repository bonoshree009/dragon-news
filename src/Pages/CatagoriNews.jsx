import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CatagoriNews = () => {
    const {id}=useParams()
    const data =useLoaderData();
    const [catagoriNews ,setcatagoriNews] =useState([])
    //console.log(id,data)

    useEffect(() => {
        if(id == 0){
            setcatagoriNews(data);
            return;

        } else if( id == 1){
            const filternews =data.filter((news)=> news.others.is_today_pick == true);
          setcatagoriNews(filternews) 

        } else {
             const filternews =data.filter((news)=> news.category_id == id);
          setcatagoriNews(filternews) 
        }
              

    },[data,id])
    return (
        <div>
          <p className='mb-5 font-bold'>Dragon News Home</p>
          <div className='grid grid-cols-1 gap-3 '>
            {
                    catagoriNews.map((news => <NewsCard news={news}></NewsCard>))
            }
          </div>
        </div>
    );
};

export default CatagoriNews;