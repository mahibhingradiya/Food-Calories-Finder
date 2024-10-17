
import React from 'react';
import ServicesCard from './ServicesCard';
import './servicelist.css'
const ServicesList = () => {
  const services = [
    {
      title: 'Jog',
      description: 'Jog means a moderate-paced run, slower than running but faster than walking.',
      icon:'/images/running.png'
    },
    {
      title: 'Brisk Walk',
      description: 'A "brisk walk" is a fast-paced walk that boosts heart rate.',
      icon: '/images/walking.png'
    },
    {
      title: 'Gym Workout',
      description: 'A gym workout involves structured exercises using various equipment to enhance strength, endurance, and overall fitness.',
      icon:'/images/weightlifter.png'
    },
    {
        title: 'Yoga',
        description: 'Yoga is a mind-body practice that combines physical postures, breathing techniques, and meditation for overall well-being and flexibility.',
        icon:'/images/yoga.png'
      },
  ];
  

  return (
    <div className="grid">
      {services.map((service, index) => (
        <ServicesCard key={index} service={service} />
      ))}
    </div>
  );
};

export default ServicesList;