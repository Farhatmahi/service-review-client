import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen container mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://wallpaperaccess.com/full/3530420.jpg"
          className="lg:max-w-sm p-0 rounded-lg shadow-2xl"
          alt=''
        />
        <div>
          <h1 className="text-2xl lg:text-5xl font-bold">Sarah McConor</h1>
          <p className="py-6 lg:pr-64 mb-4 lg:mb-16">
          I approach photography with a romantic, impressionist sensibility. Over the past decade, I have had the pleasure of documenting some of the most iconic and exclusive celebrations for discerning patrons in over twenty countries and six continents. I have been named one of the top film photographers in the world and featured in numerous prestigious publications such as Harpers Bazaar, Elle, Town & Country and Martha Stewart Weddings. 
          </p>
          <p>WRITE US</p>
          <p className='font-bold'>sarahconnor@photography.com</p>
          <p>CALL US</p>
          <p className="font-bold">+453 567 788 34</p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
