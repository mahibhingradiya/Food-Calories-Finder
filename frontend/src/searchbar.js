import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './searchbar.css'

export default function Searchbar({ setApi }) {
  const [foodItems, setFoodItems] = useState([]); // State for the list of food items
  const [selectedFood, setSelectedFood] = useState(''); // State for selected food
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/food/');
        setFoodItems(response.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    };

    fetchFoodItems();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setError('');

    // Check if the user is logged in by verifying tokens
    const tokens = localStorage.getItem('tokens');
    if (!tokens) {
      alert('You must be logged in to search for food items.'); // Show error message
      return; // Prevent further execution
    }

    console.log('Selected Food:', selectedFood);

    if (selectedFood) {
      axios.get(`http://127.0.0.1:8000/api/food/${selectedFood}/`)
        .then(response => {
          if (setApi) {
            setApi(response.data); // If `setApi` is provided, update the API data
          } else {
            navigate('/form', { state: { apiData: response.data } }); // Navigate with data if not on form
          }
        })
        .catch(error => {
          console.error(error);
          setError('Oops! Something went wrong. Please try again later.');
        });
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="input-group input-group-lg mb-5">
        <select
          className="form-control inputstyle"
          required
          value={selectedFood}
          onChange={(event) => setSelectedFood(event.target.value)}
        >
          <option value="">Select food item</option>
          {foodItems.map((item) => (
            <option key={item.id} value={item.name}>{item.name}</option>
          ))}
        </select>
        <button className="btn btn-primary whoop" type="submit" id="button-addon2">
          Find calories
        </button>
      </div>
      {error && <p className="text-danger">{error}</p>} {/* Display error message */}
    </form>
  );
}
