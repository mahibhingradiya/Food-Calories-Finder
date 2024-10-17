import React from "react";
import ServicesList from "./ServicesList";
import SearchBar from './searchbar.js';
import './home.css';




const Home = () => {

  const backgroundStyle = {
    backgroundImage: `url(${'/images/image.png'})`, // Use the imported image variable
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "30vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0",
    padding: "0",
  };



  return (
    <>
      <div className="min-h-screen bg-cover md:pt-4 px-6 md:px-12 bg-center">
        {/* Search Section */}
        <div>
          <div className="my-8">
            <h1 className="text-[33px] font-cursiveFont text-center md:text-[50px] md:text-start font-bold mb-4 mt-2">
              Plan Your Perfect Workout with{" "}
              <span className="text-BaseColor text-[40px] font-cursiveFont">
                HungryBird
              </span>
            </h1>
            <div className="flex justify-center mb-6">
              <img src='images/card-01.jfif' className="rounded-lg object-cover w-[300px] h-[100px]" alt="Diet Plan" />
            </div>
            <p className="text-lg leading-8 text-gray-800 text-center mt-6 mb-6">
              Welcome to HungryBird, your ultimate tool for tracking calories and nutrients in your daily meals...
            </p>
          </div>
          {/* Optional Images Section */}
          {/* <div className="flex gap-4 min-h-[200px] mt-2"> */}
            {/* Uncomment if you want more images */}
            {/* <div className="rounded-lg overflow-hidden flex-1">
              <img src='images/card-02.webp' className="object-cover w-full h-full" alt="Diet Plan 2" />
            </div>
            <div className="rounded-lg overflow-hidden flex-1">
              <img src='images/card-03.png' className="object-cover w-full h-full" alt="Diet Plan 3" />
            </div> */}
          {/* </div> */}
        </div>
        <SearchBar />
      </div>

      {/* Services Section */}
      <section className="pb-12 px-6 md:px-12">
        <div className="container mx-auto mt-8">
          <h2 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
            
            <span className="text-BaseColor text-[43px] font-cursiveFont">
              Our Best Services
            </span>
          </h2>
          <div className="services-section">
            <ServicesList />
          </div>
        </div>
      </section>
      <div style={backgroundStyle}>
      </div>


    </>
  );
};

export default Home;
