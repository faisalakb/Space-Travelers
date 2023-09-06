import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import planet from './assets/planet.png';
import './NavBar.css';

const NavBar = () => (
  <header>
    <nav className="nav-container">
      <div className="logo-container">
        <img src={planet} alt="Logo" className="planet-logo" />
        <h1>space Traveller&apos;s Hub</h1>
      </div>
      <ul className="nav-items">
        <li className="li">
          <Link to="/">Rocket&apos;s</Link>
          {' '}
          {/* Use Link component */}
        </li>
        <li className="li">
          <Link to="/Mission">Mission&apos;s</Link>
          {' '}
          {/* Use Link component */}
        </li>
        <li className="li">
          <Link to="/MyProfile">My Profile</Link>
          {' '}
          {/* Use Link component */}
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
