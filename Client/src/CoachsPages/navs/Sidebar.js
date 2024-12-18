import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaTachometerAlt, FaUser, FaFileInvoiceDollar, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage to log the user out
    localStorage.removeItem('token');
    // Optionally, clear any other session data or user-specific data

    // Redirect to the login page or home page
    navigate('/Join'); // Or you can navigate to '/' for the home page
  };

  const navLinkStyle = {
    color: '#BDC3C7',
    padding: '10px',
    textDecoration: 'none',
  };

  return (
    <div
      style={{
        width: '250px',
        height: '100vh',
        position: 'fixed',
        backgroundColor: '#000000',
        color: '#BDC3C7',
      }}
    >
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <div className="flex-shrink-0 flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">
            Coach<span className="text-yellow-400">33</span>
            <span className="text-xl">Space</span>
          </span>
        </div>
      </div>

      <Nav className="flex-column">
        <Link to="/coach" style={navLinkStyle}>
          <FaTachometerAlt className="mr-2" /> Tableau de bord
        </Link>
        <Link to="/ProfilCoach" style={navLinkStyle}>
          <FaUser className="mr-2" /> Profil
        </Link>
        {/* 
        <Link to="/factures" style={navLinkStyle}>
          <FaFileInvoiceDollar className="mr-2" /> Factures
        </Link>
        <Link to="/parametres" style={navLinkStyle}>
          <FaCog className="mr-2" /> Paramètres
        </Link>
        */}
        <span onClick={handleLogout} style={navLinkStyle}>
          <FaSignOutAlt className="mr-2" /> Déconnexion
        </span>
      </Nav>
    </div>
  );
};

export default Sidebar;
