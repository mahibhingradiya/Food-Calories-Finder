import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            });
            localStorage.setItem('tokens', JSON.stringify(response.data));  // Save tokens in localStorage
            navigate('/');  // Redirect after successful login
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        }
    };

    

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="card p-5 shadow-lg" style={{ width: '32rem' }}> {/* Increased width */}
                <h2 className="text-center mb-4">Login</h2>
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
                    {error && <p className="text-danger mb-3">{error}</p>}
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                    <div className="text-center mb-4 mt-3">
                        <span className="me-2">Not registered yet?</span>
                        <a href='/signup' className="text-primary signup-link">Signup</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
