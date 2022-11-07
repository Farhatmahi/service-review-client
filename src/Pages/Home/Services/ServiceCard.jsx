import React from "react";

const ServiceCard = ({service}) => {
    const {service_name, service_description, service_img, price} = service
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-56" src={service_img} alt="service" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service_name}</h2>
        <p className="text-sm mb-3">{service_description.slice(1,100)}...</p>
        <div className="card-actions justify-between items-center">
          <p>{price}</p>
          <button className="btn btn-primary btn-skew"><p className="skew-x-12">See more</p></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
