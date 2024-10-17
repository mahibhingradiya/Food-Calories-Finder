import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('tokens');  // Remove tokens from localStorage
        navigate('/login');  // Redirect to login page
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
