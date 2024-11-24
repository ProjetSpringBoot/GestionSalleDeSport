import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Import the local image
import backgroundImage from '../drawable/Home.jpg';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          REACH YOUR LIMITS
          <br />
          AND GET TO THE
          <br />
          NEXT LEVEL
        </h1>

        <p className="max-w-2xl mb-8 text-gray-200">
        Join OUR Studio Today and Experience Expert Training, Personalized Programs, and a Supportive Community to Achieve Your Fitness Goals.
        </p>

        <div className="flex gap-4">
         
          <Link to='/Join'>
  <button className="px-8 py-3 bg-yellow-500 text-black hover:bg-yellow-400 transition-colors">
    JOIN NOW
  </button>
</Link>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-center px-8">
        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            →
          </button>
          <span className="text-white">
            {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-white">
          <span className="font-bold">SOCIAL</span>
          <FaFacebook className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
          <FaInstagram className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
          <FaTwitter className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
          <FaEnvelope className="w-6 h-6 cursor-pointer hover:text-yellow-500" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
