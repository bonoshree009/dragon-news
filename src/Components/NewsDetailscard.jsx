import React from 'react';
import { Link } from 'react-router';

const NewsDetailscard = ({news}) => {
   // console.log(news)
    return (
        <div className='space-y-5'>
            <img src={news.image_url} alt="" className='w-full h-[350] object-cover' />
            <h2 className='text-2xl font-bold'>{news.title}</h2>
            <p>{news.details}</p>
            <Link to={`/catagori/${news.category_id}`}><button className='btn btn-secondary'>back to catagori</button></Link>
        </div>
    );
};

export default NewsDetailscard;