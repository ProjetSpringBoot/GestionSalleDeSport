import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../drawable/Home.jpg';
import fitness from '../drawable/fitness.jpg';
import Aerobic from '../drawable/aerobic.jpg';
import box from '../drawable/box.jpeg';
import Taekwondo from '../drawable/Taekwondo.jpeg';
import Pilates from '../drawable/Pilates.jpg';
import Yoga from '../drawable/yoga.jpg';
import Spinning from '../drawable/Spinning.jpeg';
import Zumba from '../drawable/zumba.jpeg';
import MartialArts from '../drawable/MartialArts.jpeg';
import CrossFit from '../drawable/CrossFit.jpeg';

const cardData = [
  {
    title: 'Fitness Training',
    description: 'Achieve your fitness goals with personalized training plans and expert guidance.',
    image: fitness,
  },
  {
    title: 'Aerobic Classes',
    description: 'Join our high-energy aerobic sessions designed to improve your endurance and flexibility.',
    image: Aerobic,
  },
  {
    title: 'Boxing',
    description: 'Learn the art of boxing to build strength, confidence, and agility.',
    image: box,
  },
  {
    title: 'Taekwondo',
    description: 'Master the techniques of Taekwondo while improving discipline and coordination.',
    image: Taekwondo,
  },
  {
    title: 'Yoga and Meditation',
    description: 'Relax and rejuvenate with yoga and meditation sessions to enhance your mental well-being.',
    image: Yoga,
  },
  {
    title: 'Zumba Dance',
    description: 'Burn calories and have fun in our energetic Zumba dance classes.',
    image: Zumba,
  },
  {
    title: 'Spinning',
    description: 'Boost your cardio and endurance with our dynamic indoor cycling sessions.',
    image: Spinning,
  },
  {
    title: 'CrossFit',
    description: 'Challenge yourself with high-intensity CrossFit workouts for strength and conditioning.',
    image: CrossFit,
  },
  {
    title: 'Pilates',
    description: 'Improve your posture, flexibility, and core strength with Pilates exercises.',
    image: Pilates,
  },
  {
    title: 'Martial Arts',
    description: 'Learn various martial arts techniques in a supportive and disciplined environment.',
    image: MartialArts,
  },
];

const ServicesGrid = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query
  const [filteredCards, setFilteredCards] = useState(cardData); // State for filtered cards

  const handleLearnMore = (title) => {
    console.log(`Navigating to details about ${title}`);
    navigate(''); // Replace with your route
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter cardData based on the search query
    const filtered = cardData.filter((card) =>
      card.title.toLowerCase().includes(query)
    );
    setFilteredCards(filtered);
  };

  return (
    <div className="p-10">
      {/* Search Bar */}
      <div className="mb-10">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a service..."
          className="w-full border border-yellow-300 ring-yellow-400 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = backgroundImage; // Provide a fallback image path
                }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 ">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button
                  onClick={() => handleLearnMore(card.title)}
                  className="w-full bg-transparent text-yellow-400 border border-yellow-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No services match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicesGrid;
