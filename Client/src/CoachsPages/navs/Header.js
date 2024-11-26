import React, { useState } from 'react';
import { Navbar, Nav, Image, Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCog, FaSignOutAlt } from 'react-icons/fa';
import profil from '../../drawable/profil.png'; // Import the image


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navbar expand="lg" variant="light" className="shadow-sm" style={{ backgroundColor: 'white' }}>
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <div className="flex-shrink-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-dark">
              Coach<span className="text-yellow-400">33</span>
              <span className="text-xl">Space</span>
            </span>
          </div>
        </Link>
        <Image src={profil} roundedCircle width="40" height="40" alt="User Avatar" />

       {/*<Nav className="ml-auto">
          <Dropdown show={showMenu} onToggle={() => setShowMenu(!showMenu)} align="end">
            <Dropdown.Toggle variant="link" id="dropdown-custom-components">
              <Image src={profil} roundedCircle width="40" height="40" alt="User Avatar" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/parametres">
                <FaCog className="mr-2" /> Paramètres
              </Dropdown.Item>
              <Dropdown.Item href="/logout">
                <FaSignOutAlt className="mr-2" /> Déconnexion
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>*/}
        
      </Container>
    </Navbar>
  );
};

export default Header;
