import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios"; // Import axios for API requests
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

const Reviews = ({ newReview }) => {
  // State for the list of reviews
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Fetch reviews from the backend on component mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/reviews/"); // Replace with your actual API endpoint
        setReviews(response.data); // Set fetched reviews to state
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  // Effect to handle new review submission
  useEffect(() => {
    if (newReview) {
      setReviews((prevReviews) => [...prevReviews, newReview]);
    }
  }, [newReview]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Function to handle review submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is logged in
    const tokens = localStorage.getItem("tokens");
    if (!tokens) {
      setError("You need to be logged in to submit a review.");
      return;
    }

    if (reviewText && reviewName) {
      try {
        // Post new review to the backend
        const response = await axios.post("http://127.0.0.1:8000/api/reviews/", {
          name: reviewName,
          description: reviewText,
        });

        // Add new review to the list of reviews
        setReviews((prevReviews) => [...prevReviews, response.data]);

        // Clear form inputs
        setReviewText("");
        setReviewName("");
        setError("");
        setSuccess(true);

        // Hide success message after 3 seconds
        setTimeout(() => setSuccess(false), 3000);
      } catch (error) {
        setError("There was an error submitting your review.");
        console.error("Error submitting review:", error);
      }
    } else {
      setError("Please fill in all fields.");
    }
  };

  return (
    <div>
      {/* Submit Review Section */}
      <section className="container mt-5">
        <h2>Submit Your Review</h2>
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">Review submitted successfully!</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="review" className="form-label">Your Review</label>
            <textarea
              className="form-control"
              id="review"
              rows="3"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Review</button>
        </form>
      </section>

      {/* Reviews Section */}
      <section className="container mt-5">
        <h2 className="text-center">Our Reviews</h2>
        <Slider {...settings}>
          {reviews.length > 0 ? (
            reviews.map((data, index) => (
              <div key={index} className="p-3">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <p className="card-text">{data.description}</p>
                    <div className="d-flex align-items-center mt-4">
                      <div>
                        <h5 className="card-title mb-0">{data.name}</h5>
                        <p className="text-muted mb-0">Customer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No reviews available.</p>
          )}
        </Slider>
      </section>
    </div>
  );
};

export default Reviews;
