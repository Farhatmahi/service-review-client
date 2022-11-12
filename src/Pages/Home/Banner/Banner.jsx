import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mb-8 lg:mb-20"
      style={{ backgroundImage: `url('../../../images/banner.jpeg')` }}
    >
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="hero-content text-center md:text-left">
        <div className="max-w-md text-white">
          <h1 className="mb-2 text-md lg:2xl font-bold">Sarah McConor</h1>
          <h1 className="mb-5 text-3xl lg:5xl font-bold">
            Professional Photographer from Norway
          </h1>
          <p className="mb-5 text-sm">
            Capturing the beauty of your journey, the pure essence of new life.”
          </p>
          <Link to="/services"><button className="btn btn-primary">Get Started</button></Link>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;
