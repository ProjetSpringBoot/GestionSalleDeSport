import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import backArrow from '../drawable/back-arrow.jpg'; 

const ProfilCoach = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
      {/* Back Arrow Button */}
      <Link to="/ListeCoachs">
        <img
          src={backArrow} 
          alt="Back"
          className="w-8 h-8 mb-4 cursor-pointer absolute top-4 left-4"
        />
      </Link>

      {/* Profile Card */}
      <Card className="max-w-md w-full bg-white rounded-3xl shadow-lg overflow-visible">
        <div className="relative -mt-16 flex justify-center mb-4">
          <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img
              src="/api/placeholder/128/128"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <Card.Body className="text-center px-6 pb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-1">
            Samantha Jones
          </h3>
          <p className="text-gray-500 text-sm mb-3">
            New York, United States
          </p>

          <p className="text-gray-600 mb-4">
            Web Producer - Web Specialist
            <br />
            Columbia University · New York
          </p>
          
          <p className="text-gray-500 text-sm mb-4">
          email : 
          </p>
          <p className="text-gray-500 text-sm mb-4">
          Phone number : 
          </p>

         
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfilCoach;
