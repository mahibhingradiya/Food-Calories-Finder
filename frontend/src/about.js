import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import ServicesList from "./ServicesList";
import Reviews from "./Reviews";

export default function About() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState(null);

  // Check if the user is logged in (token exists in localStorage)
  useEffect(() => {
    const tokens = localStorage.getItem("tokens");
    if (tokens) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If user is not logged in, redirect to login
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login page
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/reviews/", {
        name,
        description: review, // Ensure you're using 'description' key
      });

      // Update the reviews section with the new review
      setNewReview({
        name,
        description: review,
      });

      // Clear form inputs
      setName("");
      setReview("");
      setSuccess(true);
      setError(false);
    } catch (error) {
      console.error("Error submitting review:", error);
      setError(true);
      setSuccess(false);
    }
  };



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

      <Reviews newReview={newReview} />   

      {/* Services Section */}
      <section className="pb-12 px-6 md:px-12">
        <div className="container mx-auto mt-8">
          <h2 className="text-[33px] md:text-[40px] font-cursiveFont font-bold mb-4 text-center">
            Our{" "}
            <span className="text-BaseColor text-[43px] font-cursiveFont">
              Best Services
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
}
