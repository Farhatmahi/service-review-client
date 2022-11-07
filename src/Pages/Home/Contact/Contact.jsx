import React from "react";

const Contact = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("../../../images/floating.jpeg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Like what you saw?</h1>
          <p className="mb-5">
            Feel free to contact me
          </p>
          <button className="btn btn-primary btn-skew">Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
