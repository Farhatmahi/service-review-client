import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-2xl lg:text-4xl text-center mb-12">
        Check my featured services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 mb-16">
        <PhotoProvider>
          {services.map((service) => (
            <>
              <PhotoView key={service?.id} service={service} />
              <ServiceCard key={service?.id} service={service} />
            </>
          ))}
        </PhotoProvider>
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <button className="btn btn-primary btn-skew">
            <p className="skew-x-12">Browse more services</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
