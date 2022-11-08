import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, service_name, service_description, service_img, price } =
    useLoaderData();

  return (
    <div className="container md:mx-auto">
      <div className="flex justify-between flex-col md:flex-row items-start py-10">
        <div className="md:w-1/2">
          <img src={service_img} className="w-full mb-4 md:mb-0" alt="" />
        </div>
        <div className="md:w-1/2 md:ml-10 px-4">
          <h1 className="text-3xl">{service_name} Photography</h1>
          <hr className="w-1/4 my-3 border-1 border-black" />
          <p>Price : {price}</p>
          <div className="flex items-center my-4">
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <p className="ml-3 text-xs">1 Reviews</p>
          </div>
          <p>{service_description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
