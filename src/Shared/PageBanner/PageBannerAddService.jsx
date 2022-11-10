import React from "react";

const PageBannerAddService = () => {
  return (
    <div
      className="hero"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-lg lg:text-5xl font-bold py-20">Add Service</h1>
        </div>
      </div>
    </div>
  );
};

export default PageBannerAddService;
