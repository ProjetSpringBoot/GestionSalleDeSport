import React from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router

// Sample data for the cards
const cardData = [
  {
    title: 'Personal Training',
    description: 'Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.',
    image: '/images/personal-training.jpg', // Replace with actual image paths
  },
  {
    title: 'Group Fitness Classes',
    description: 'Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.',
    image: '/images/group-fitness.jpg',
  },
  {
    title: 'Nutritional Guidance',
    description: 'Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.',
    image: '/images/nutritional-guidance.jpg',
  },
  {
    title: 'Wellness Programs',
    description: 'Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.',
    image: '/images/wellness-programs.jpg',
  },
  {
    title: 'Cardio Workouts',
    description: 'Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.',
    image: '/images/cardio-workouts.jpg',
  },
  {
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.',
    image: '/images/strength-training.jpg',
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate(); // For navigation

  const handleLearnMore = (title) => {
    // Navigate to a product page or display more details
    console.log(`Navigating to details about ${title}`);
    navigate('/ProductPage'); // Replace '/ProductPage' with your route
  };

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.target.src = '/images/fallback.jpg'; // Provide a fallback image path
            }}
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button
              onClick={() => handleLearnMore(card.title)}
              className="w-full bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"
              >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
