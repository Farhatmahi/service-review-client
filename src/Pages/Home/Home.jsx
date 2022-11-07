import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="">
        <Banner />
        <Services/>
        <Contact />
    </div>
  );
};

export default Home;
