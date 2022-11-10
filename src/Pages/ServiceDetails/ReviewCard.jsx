import React from "react";

const ReviewCard = ({ review }) => {
  const { email, reviewText, img, name } = review;
  
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
      </div>
    </div>
  );
};

export default ReviewCard;
