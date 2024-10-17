import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css'; // Optional for custom styling

const Navbar = () => {
  const navigate = useNavigate();
  const tokens = localStorage.getItem('tokens');

  const handleLogout = () => {
    localStorage.removeItem('tokens');  // Remove tokens from localStorage
    navigate('/login');  // Redirect to login page
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">HungryBird</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/nutrition">Nutrition</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            
            {/* Conditional Rendering based on whether the user is logged in or not */}
            {tokens ? (
              <li className="nav-item ms-4">
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item ms-4 d-flex">
                <Link className="nav-link" to="/signup">Sign Up</Link>
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
