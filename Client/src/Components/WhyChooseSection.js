import React from 'react';
import img from '../drawable/Home.jpg';
import { Link } from 'react-router-dom';


const WhyChooseSection = () => {
  return (
    <section className="why-choose-section flex flex-wrap bg-white p-8 rounded-lg shadow-md">
      <div className="image-container flex-shrink-0 w-full md:w-1/2 p-4">
        <img
          src={img} 
          alt="People training in a gym"
          className="rounded-lg w-full object-cover"
        />
      </div>

      <div className="text-container w-full md:w-1/2 p-4">
        <h2 className="text-2xl font-bold mb-4">Why Choose OSTOURAA33 Studio?</h2>
        <p className="text-gray-600 mb-6">
          Discover the Benefits That Set Us Apart and Propel Your Fitness Journey Forward.
        </p>

        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">Expert Trainers</h3>
              <p className="text-gray-600">
                Our certified trainers provide personalized guidance and expert advice to help you achieve your fitness goals.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">State-of-the-Art Equipment</h3>
              <p className="text-gray-600">
                Work out with the latest and most advanced fitness equipment to maximize your results and enhance your experience.
              </p>
            </div>
          </li>

          <li className="flex items-start">
            <span className="text-orange-500 text-xl mr-2">✔️</span>
            <div>
              <h3 className="font-bold text-lg">Comprehensive Programs</h3>
              <p className="text-gray-600">
                Enjoy a variety of classes and programs tailored to all fitness levels, from beginner to advanced.
              </p>
            </div>
          </li>
        </ul>

        <div className="flex gap-4">
         
          <Link to='/Activity'>
        <button className="mt-6 bg-yellow-400 text-yellow-100 py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors duration-300">
          Explore Our Activities        
        </button>
        </Link>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;
