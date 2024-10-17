

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //page to reload

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/api/signup/', { username, password });
            navigate('/login');  // Redirect to login page after successful signup
        } catch (err) {
            setError('Signup failed. Please try again.');
        }
    };

    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light"> 
            <div className="card p-5 shadow-lg" style={{ width: '30rem' }}>
                <h2 className="card-title text-center mb-4">Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-danger mb-3">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        Signup
                    </button>
                    <div className="text-center mb-4 mt-3">
                        <span className="me-2">Already registered?</span>
                        <a href='/login' className="text-primary signup-link">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;

