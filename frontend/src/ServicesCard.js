import React from 'react';
import './servicecard.css';

const ServicesCard = ({ service }) => {
  const { title, description, icon } = service;

  return (
    <div className="service-card"> {/* Apply the service-card class here */}
      <img src={icon} alt={title} className="bg-BaseColor text-4xl text-white mb-4 inline-block rounded-full" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
};

export default ServicesCard;
