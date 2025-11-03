import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    thumbnail_url,
    rating,
    total_view,
    others,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="card w-full  shadow-md hover:shadow-xl transition-all duration-300 ">
      {/* Author section */}
      <div className="flex justify-between items-center p-4 bg-gray-200 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div>
             <button className="btn btn-ghost btn-circle">
          <FaRegBookmark className="text-gray-600 text-lg" />
        </button>
            <button className="btn btn-ghost btn-circle">
          <FaShareAlt className="text-gray-600 text-lg" />
        </button>
       
        </div>
        
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="p-4">
        <p className="text-sm text-gray-600">
          {details.slice(0, 180)}...
          <button className="text-blue-600 font-medium ml-1 hover:underline">
            Read More
          </button>
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline text-xs text-gray-600 border-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer (Rating & Views) */}
      <div className="px-4 pb-4 flex justify-between items-center border-t pt-3">
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="font-semibold text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
