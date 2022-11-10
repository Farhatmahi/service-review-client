import React from "react";

const MyReviewsCard = ({ review, handleDelete }) => {
  const {_id, email, reviewText, img, name } = review;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl mb-4">
      <div className="card-body flex flex-row items-center">
        <div className="mr-4">
          <div className="avatar">
            <div className="w-12 md:w-16 rounded-full">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
        <div className="flex-grow">
          <h2 className="card-title text-sm">
            {name}{" "}
            <span className="hidden md:block text-xs font-light">
              ({email})
            </span>
          </h2>
          <p className="text-md md:text-lg">"{reviewText}"</p>
        </div>
        <div className="flex items-center">
        <button className="btn btn-outline mr-2">Edit</button>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewsCard;
