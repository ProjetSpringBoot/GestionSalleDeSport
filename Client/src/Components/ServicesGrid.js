import React from 'react';

// Sample data for the cards
const cardData = [
  {
    title: 'Personal Training',
    description: 'Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.',
    image: 'path/to/your/image1.jpg', // Replace with actual image paths
  },
  {
    title: 'Group Fitness Classes',
    description: 'Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.',
    image: 'path/to/your/image2.jpg',
  },
  {
    title: 'Nutritional Guidance',
    description: 'Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.',
    image: 'path/to/your/image3.jpg',
  },
  {
    title: 'Wellness Programs',
    description: 'Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.',
    image: 'path/to/your/image4.jpg',
  },
  {
    title: 'Cardio Workouts',
    description: 'Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.',
    image: 'path/to/your/image5.jpg',
  },
  {
    title: 'Strength Training',
    description: 'Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.',
    image: 'path/to/your/image6.jpg',
  },
];

const ServicesGrid = () => {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
