import React from 'react';
import backgroundImage from '../drawable/Home.jpg'; // Correctly importing the background image
import Navbar from './NavBar';

const ProductCard = ({ 
  title = "Gym",
  category = "Cardio Workouts",
  price = 3999,
  rating = 4,
  maxRating = 5,
  cardNumber = "#### 8787",
  cardType = "VISA Platinum",
  imageUrl = backgroundImage // Use the imported background image here
}) => {
  // Render stars based on rating
  const renderStars = () => {
    return Array.from({ length: maxRating }).map((_, index) => (
      <span key={index} style={{ marginLeft: '4px', color: index < rating ? 'red' : 'gray' }}>
        ★
      </span>
    ));
  };

  return (
    <div>
      <Navbar/>
    
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Center the card vertically and horizontally
      backgroundColor: '#f8f9fa' // Light background
    }}>
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '320px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#fff' // White card background
      }}>
        <img 
          src={imageUrl} 
          alt={title} 
          style={{ width: '100%', height: 'auto' }}
        />

        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <h5 style={{ margin: '0 0 8px' }}>{title}</h5>
              <p style={{ margin: 0, color: '#888' }}>{category}</p>
            </div>
            <div>
              {renderStars()}
              <span style={{ marginLeft: '8px', color: '#888' }}>
                {rating}/{maxRating}
              </span>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #eee',
            borderBottom: '1px solid #eee',
            padding: '12px 0',
            margin: '12px 0'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '20px', fontWeight: 'bold' }}>${price.toLocaleString()}</span>
              <span style={{ color: '#888' }}>{cardNumber}</span>
            </div>
            <p style={{ margin: 0, color: '#888', fontSize: '14px' }}>{cardType}</p>
          </div>

          


<div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <button 
                className="bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"

              >
                +
              </button>
              <button 
                className="bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"

              >
                -
              </button>
            </div>
            <div>
              <button 
            className="bg-transparent text-teal-400 border border-teal-400 py-2 px-4 rounded hover:bg-teal-400 hover:text-slate-900 transition-colors uppercase text-sm tracking-wider"
            >
                BUY NOW
              </button>
            </div>
          </div>

          
        </div>
      </div>
    </div>
    </div>

  );
};

export default ProductCard;









