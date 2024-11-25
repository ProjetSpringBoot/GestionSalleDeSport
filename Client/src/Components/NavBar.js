import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import shoppingCardImg from '../drawable/shopping-cart.png'; // Import the image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set logged-in state based on token presence
  }, []);

  
  const handleLogout = () => {
    // Clear token and update state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to home page
  };

  const navItems = [
    { name: 'ACCUEIL', to: '/' },
    { name: 'ACTIVITÉS', to: '/Activity' },
    { name: 'COACHS', to: '/ListeCoachs' },
    { name: 'CONTACT', to: '/ContactPage' },
    { name: 'CHARIOT', to: '/ShoppingCart', isImage: true }, // Mark as an image
  ];

  return (
    <nav style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }} className="sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-white">
              Ostoura<span className="text-yellow-400">33</span>
              <span className="text-xl">GymStudio</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center mt-7">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  {item.isImage ? (
                    <Link to={item.to} className="no-underline">
                      <img
                        src={shoppingCardImg}
                        alt="Chariot"
                        style={{ width: '24px', height: '24px' }} 
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className="no-underline text-white hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              {/* Login/Logout Button */}
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/Join"
                    className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200 text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
              </li>
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
                    <Link to={item.to} onClick={() => setIsMenuOpen(false)} className="no-underline">
                      <img
                        src={shoppingCardImg}
                        alt="Chariot"
                        style={{ width: '24px', height: '24px' }} 
                      />
                    </Link>
                  ) : (
                    <Link
                      to={item.to}
                      className="no-underline text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-red-500 text-white block px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200 text-base font-medium"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/Join"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-yellow-400 text-black block px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200 text-base font-medium"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
