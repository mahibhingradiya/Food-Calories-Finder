import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation -Runs side effects like fetching data or modifying
import Chart from 'chart.js/auto';
import './form.css';
import Searchbar from './searchbar';

export default function Form() {
  const location = useLocation(); // Get data passed from searchbar
  const chartRef = useRef(null);
  const [api, setApi] = useState(location.state?.apiData || null); // Set initial API data if available
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (api && chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Carbohydrates', 'Cholesterol', 'Saturated Fat', 'Total Fat', 'Fiber', 'Potassium', 'Protein', 'Sodium', 'Sugar'],
          datasets: [{
            label: `Nutritional values of ${api.name}`,
            data: [
              api.carbohydrates_total_g,
              api.cholesterol_mg,
              api.fat_saturated_g,
              api.fat_total_g,
              api.fiber_g,
              api.potassium_mg,
              api.protein_g,
              api.sodium_mg,
              api.sugar_g
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }, [api]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          {/* Pass setApi as a prop to update the API data */}
          <Searchbar setApi={setApi} />
          {api && api.name ? (
            <div>
              <h1 className="text-center">
                {api.name} has a total of <strong className='minutes'>{api.calories} Calories</strong>
              </h1>

              {api.calories >= 225 && (
                <img src="/images/shocked.png" alt="Shocked" className="img-responsive" />
              )}

              {api.sodium_mg > 350 && (
                <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                  <div>
                    This food contains a HIGH amount of SODIUM. High sodium causes severe dehydration and water retention.
                  </div>
                </div>
              )}

              {api.sugar_g > 22.5 && (
                <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                  <div>
                    This food contains a HIGH amount of SUGAR. Sugar causes insulin spikes and is a leading cause of obesity.
                  </div>
                </div>
              )}
          
              {/* Display the nutritional data */}
              <div className="row justify-content-center mt-5 mb-5">
                <div className="col-md-10 caloriescont shadow rounded">
                  <div className="row">
                    <div className="col-md-6 justify-content-center">
                      <h2 className="mb-3">Nutritional Values</h2>
                      <ul className='nutrition-list'>
                        <li>Carbohydrates g: <span className="float-end">{api.carbohydrates_total_g}</span></li>
                        <li>Cholesterol mg: <span className="float-end">{api.cholesterol_mg}</span></li>
                        <li>Saturated fat g: <span className="float-end">{api.fat_saturated_g}</span></li>
                        <li>Total Fat g: <span className="float-end">{api.fat_total_g}</span></li>
                        <li>Fiber g: <span className="float-end">{api.fiber_g}</span></li>
                        <li>Potassium mg: <span className="float-end">{api.potassium_mg}</span></li>
                        <li>Protein g: <span className="float-end">{api.protein_g}</span></li>
                        <li>Sodium mg: <span className="float-end">{api.sodium_mg}</span></li>
                        <li>Sugar g: <span className="float-end">{api.sugar_g}</span></li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-5">
                      <h4 className="mt-3 mb-4">To burn {api.calories} calories, you will have to:</h4>
                      {/* Exercise suggestions go here */}
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="/images/running.png" alt="Running" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5>Jog</h5>
                          <p>You will have to jog for <strong className='minutes'>{Math.floor(api.calories / 410 * 60)} Minutes</strong></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="/images/yoga.png" alt="Yoga" />
                        </div>
                        <div className="flex-grow-1 ms-4">
                          <h5>Do Power Yoga</h5>
                          <p>You will have to do power yoga for <strong className='minutes'>{Math.floor(api.calories / 283 * 60)} Minutes</strong></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-5">
                        <div className="flex-shrink-0">
                          <img src="/images/weightlifter.png" alt="Weightlifter" />
                        </div>
                        <div className="flex-grow-1 ms-4">
                          <h5>Get a Gym Workout</h5>
                          <p>You will have to lift weight for <strong className='minutes'>{Math.floor(api.calories / 378 * 60)} Minutes</strong></p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src="/images/walking.png" alt="Walking" />
                        </div>
                        <div className="flex-grow-1 ms-1">
                          <h5>Go for a Brisk Walk</h5>
                          <p>You will have to brisk walk for <strong className='minutes'>{Math.floor(api.calories / 221 * 60)} Minutes</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1>Nutritional Values Chart</h1>
                <div className='chart'>
                  <canvas ref={chartRef}></canvas>
                </div>
              </div>
            </div>
          ) : (
            <div className="alert alert-warning">Start searching now!!</div>
          )}
        </div>
      </div>
    </div>
  );
}
