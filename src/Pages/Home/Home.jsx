import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "./About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";

const Home = () => {
  useTitle("Home")
  return (
    <div className="">
        <Banner />
        <About />
        <Services/>
        <Contact />
    </div>
  );
};

export default Home;
