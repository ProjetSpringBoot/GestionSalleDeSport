import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Sidebar from './navs/Sidebar'; // Sidebar import
import Header from './navs/Header';  // Header import

const ProfilCoach = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="min-h-screen flex-1 flex items-center justify-center p-4 bg-transparent">
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
                email : sam.jones@email.com
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Phone number : +123456789
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilCoach;
