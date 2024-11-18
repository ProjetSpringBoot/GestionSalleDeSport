import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import shoppingCardImg from '../drawable/shopping-cart.png'; // Import the image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'ACCUEIL', to: '/' },
    { name: 'ACTIVITÉS', to: '/Activity' },
    { name: 'CONTACT', to: '/ContactPage' },
    { name: 'CHARIOT', to: '/CHARIOT', isImage: true }, // Mark as an image
    { name: 'Login', to: '/Login', isButton: true }
  ];

  return (
    <nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-cursive text-white">
              Ostoura<span className="text-yellow-400">33</span>
              <span className="text-xl">GymStudio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.isImage ? (
                    <Link to={item.to}>
                      <img 
                        src={shoppingCardImg} 
                        alt="Chariot" 
                        style={{ width: '24px', height: '24px' }} // Adjust size as needed
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className={`${
                        item.isButton
                          ? 'bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200'
                          : 'text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.isImage ? (
                    <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
                      <img 
                        src={shoppingCardImg} 
                        alt="Chariot" 
                        style={{ width: '24px', height: '24px' }} // Adjust size as needed
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className={`${
                        item.isButton
                          ? 'bg-yellow-400 text-yellow-100 block px-4 py-2 rounded-md hover:bg-yellow-800 transition-colors duration-200'
                          : 'text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
